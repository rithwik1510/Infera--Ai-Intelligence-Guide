"""Search utilities with optional Meilisearch integration."""
from __future__ import annotations

import asyncio
import logging
from collections.abc import Iterable
from datetime import datetime
from typing import Any

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from app.core.config import settings
from app.models.catalog import Benchmark, ModelProfile
from app.models.learn import LearningTrack
from app.models.news import NewsArticle, NewsSource
from app.schemas.search import SearchCategory, SearchGroup, SearchResponse, SearchResult

try:  # pragma: no cover - optional dependency
    from meilisearch import Client as MeiliClient
except ImportError:  # pragma: no cover - optional dependency
    MeiliClient = None  # type: ignore[assignment]

LOGGER = logging.getLogger(__name__)

DATE_FORMAT = "%b %d, %Y"
MEILI_INDEXES = {
    SearchCategory.NEWS: "ai-helper-news",
    SearchCategory.COMPARISONS: "ai-helper-comparisons",
    SearchCategory.LEARN: "ai-helper-learn",
    SearchCategory.MODELS: "ai-helper-models",
}


def _tokenize(query: str) -> list[str]:
    normalized = query.strip().lower()
    tokens = [token for token in _split_non_alnum(normalized) if token]
    seen: set[str] = set()
    unique_tokens: list[str] = []
    for token in tokens:
        if token not in seen:
            unique_tokens.append(token)
            seen.add(token)
    return unique_tokens


def _split_non_alnum(value: str) -> list[str]:
    current: list[str] = []
    tokens: list[str] = []
    for char in value:
        if char.isalnum():
            current.append(char)
        else:
            if current:
                tokens.append("".join(current))
                current = []
    if current:
        tokens.append("".join(current))
    return tokens


def _compute_score(tokens: Iterable[str], text: str | None, weight: float) -> float:
    if not text:
        return 0.0
    lower = text.lower()
    return sum(weight for token in tokens if token in lower)


async def search_content(
    session: AsyncSession,
    query: str,
    *,
    limit_per_group: int = 50,
) -> SearchResponse:
    client = _get_meili_client()
    if client:
        response = await _search_with_meilisearch(client, query, limit_per_group)
        if response is not None:
            return response

    tokens = _tokenize(query)
    if not query.strip() or not tokens:
        groups = [
            SearchGroup(category=SearchCategory.NEWS, label="News", results=[]),
            SearchGroup(category=SearchCategory.COMPARISONS, label="Comparisons", results=[]),
            SearchGroup(category=SearchCategory.LEARN, label="Learn", results=[]),
            SearchGroup(category=SearchCategory.MODELS, label="Models", results=[]),
        ]
        return SearchResponse(query=query, total=0, groups=groups)

    news_results = await _search_news(session, tokens, limit_per_group)
    comparison_results = await _search_comparisons(session, tokens, limit_per_group)
    learn_results = await _search_learn(session, tokens, limit_per_group)
    model_results = await _search_models(session, tokens, limit_per_group)

    groups = [
        SearchGroup(category=SearchCategory.NEWS, label="News", results=news_results),
        SearchGroup(category=SearchCategory.COMPARISONS, label="Comparisons", results=comparison_results),
        SearchGroup(category=SearchCategory.LEARN, label="Learn", results=learn_results),
        SearchGroup(category=SearchCategory.MODELS, label="Models", results=model_results),
    ]

    total = sum(len(group.results) for group in groups)
    return SearchResponse(query=query, total=total, groups=groups)


async def _search_with_meilisearch(
    client: MeiliClient, query: str, limit_per_group: int
) -> SearchResponse | None:
    if not query.strip():
        return SearchResponse(query=query, total=0, groups=[
            SearchGroup(category=category, label=category.value.capitalize(), results=[])
            for category in SearchCategory
        ])

    loop = asyncio.get_running_loop()

    async def query_index(category: SearchCategory) -> tuple[SearchCategory, list[SearchResult]]:
        index_name = MEILI_INDEXES[category]

        def _search() -> dict[str, Any]:
            index = client.index(index_name)
            return index.search(query, {"limit": limit_per_group})

        try:
            payload = await loop.run_in_executor(None, _search)
        except Exception as exc:  # pragma: no cover - network failures
            LOGGER.warning("Meilisearch query failed for %s: %s", index_name, exc)
            raise

        hits = payload.get("hits", [])
        results: list[SearchResult] = []
        for hit in hits:
            results.append(_map_hit_to_result(category, hit))
        return category, results

    try:
        responses = await asyncio.gather(
            *[query_index(category) for category in SearchCategory],
            return_exceptions=True,
        )
    except Exception:  # pragma: no cover
        return None

    groups: list[SearchGroup] = []
    total = 0
    for response in responses:
        if isinstance(response, Exception):
            return None
        category, results = response
        total += len(results)
        groups.append(
            SearchGroup(
                category=category,
                label=category.value.capitalize(),
                results=results,
            )
        )

    return SearchResponse(query=query, total=total, groups=groups)


def _map_hit_to_result(category: SearchCategory, hit: dict[str, Any]) -> SearchResult:
    if category is SearchCategory.NEWS:
        published_at = hit.get("published_at")
        meta_bits = []
        if published_at:
            try:
                meta_bits.append(datetime.fromisoformat(published_at.replace("Z", "+00:00")).strftime(DATE_FORMAT))
            except ValueError:
                meta_bits.append(published_at)
        if hit.get("source"):
            meta_bits.append(hit["source"])
        return SearchResult(
            id=hit.get("id", ""),
            title=hit.get("title", ""),
            description=hit.get("summary", ""),
            href=f"/news/{hit.get('slug', '')}",
            score=float(hit.get("_score", 0)),
            badge=hit.get("source"),
            meta=" | ".join(meta_bits) if meta_bits else None,
            is_external=False,
        )

    if category is SearchCategory.COMPARISONS:
        if hit.get("type") == "benchmark":
            description = hit.get("description", "")
            badge = hit.get("unit") or "Benchmark"
        else:
            description = f"{hit.get('provider', '')} | Context {hit.get('context_window', 0):,} tokens"
            badge = hit.get("provider")
        return SearchResult(
            id=hit.get("id", ""),
            title=hit.get("title", ""),
            description=description,
            href="/comparisons",
            score=float(hit.get("_score", 0)),
            badge=badge,
        )

    if category is SearchCategory.LEARN:
        return SearchResult(
            id=hit.get("id", ""),
            title=hit.get("title", ""),
            description=hit.get("outcome", ""),
            href=f"/learn/{hit.get('id', '').split('learn-')[-1]}",
            score=float(hit.get("_score", 0)),
            badge=str(hit.get("level", "")).upper() if hit.get("level") else None,
        )

    # MODELS
    return SearchResult(
        id=hit.get("id", ""),
        title=hit.get("title", ""),
        description=f"{hit.get('provider', '')} | Context {hit.get('context_window', 0):,} tokens",
        href="/models",
        score=float(hit.get("_score", 0)),
        badge=hit.get("provider"),
    )


def _get_meili_client() -> MeiliClient | None:
    if MeiliClient is None or not settings.meilisearch_url:
        return None
    try:
        return MeiliClient(str(settings.meilisearch_url), settings.meilisearch_api_key or None)
    except Exception as exc:  # pragma: no cover
        LOGGER.warning("Failed to initialise Meilisearch client: %s", exc)
        return None


async def _search_news(
    session: AsyncSession,
    tokens: list[str],
    limit: int,
) -> list[SearchResult]:
    result = await session.execute(
        select(NewsArticle)
        .options(selectinload(NewsArticle.source))
        .order_by(NewsArticle.published_at.desc())
    )
    articles = result.scalars().all()

    scored: list[tuple[float, datetime | None, SearchResult]] = []
    for article in articles:
        source: NewsSource | None = article.source
        content_text = " ".join(article.content or [])
        score = 0.0
        score += _compute_score(tokens, article.title, 5)
        score += _compute_score(tokens, article.summary, 3)
        score += _compute_score(tokens, " ".join(article.tags or []), 2)
        score += _compute_score(tokens, content_text, 2)
        if score <= 0:
            continue
        meta_bits = []
        if article.published_at:
            meta_bits.append(article.published_at.strftime(DATE_FORMAT))
        if source:
            meta_bits.append(source.name)
        scored.append(
            (
                score,
                article.published_at,
                SearchResult(
                    id=article.id,
                    title=article.title,
                    description=article.summary,
                    href=f"/news/{article.slug}",
                    score=score,
                    badge=source.name if source else None,
                    meta=" | ".join(meta_bits) if meta_bits else None,
                    is_external=False,
                ),
            )
        )

    scored.sort(key=lambda item: (-item[0], -(item[1].timestamp() if item[1] else 0.0)))
    return [item[2] for item in scored[:limit]]


async def _search_comparisons(
    session: AsyncSession,
    tokens: list[str],
    limit: int,
) -> list[SearchResult]:
    benchmark_result = await session.execute(select(Benchmark))
    model_result = await session.execute(
        select(ModelProfile)
        .options(selectinload(ModelProfile.scores))
    )

    results: list[SearchResult] = []
    for benchmark in benchmark_result.scalars():
        score = _compute_score(tokens, benchmark.name, 4)
        score += _compute_score(tokens, benchmark.description, 2)
        if score <= 0:
            continue
        badge = benchmark.unit if benchmark.unit else "Benchmark"
        results.append(
            SearchResult(
                id=f"benchmark-{benchmark.id}",
                title=benchmark.name,
                description=benchmark.description,
                href="/comparisons",
                score=score,
                badge=badge,
            )
        )

    for model in model_result.scalars():
        provider = model.provider or ""
        notes = model.notes or ""
        benchmark_ids = " ".join(score.benchmark_id for score in model.scores)
        score = _compute_score(tokens, model.name, 5)
        score += _compute_score(tokens, provider, 3)
        score += _compute_score(tokens, notes, 2)
        score += _compute_score(tokens, benchmark_ids, 1)
        if score <= 0:
            continue
        description = f"{provider} | Context {model.context_window:,} tokens"
        results.append(
            SearchResult(
                id=f"comparison-model-{model.id}",
                title=model.name,
                description=description,
                href="/comparisons",
                score=score,
                badge=provider,
            )
        )

    results.sort(key=lambda item: item.score, reverse=True)
    return results[:limit]


async def _search_learn(
    session: AsyncSession,
    tokens: list[str],
    limit: int,
) -> list[SearchResult]:
    result = await session.execute(select(LearningTrack))
    tracks = result.scalars().all()
    scored: list[SearchResult] = []
    for track in tracks:
        module_titles = " ".join(module.get("title", "") for module in track.modules)
        module_objectives = " ".join(module.get("objective", "") for module in track.modules)
        score = _compute_score(tokens, track.title, 5)
        score += _compute_score(tokens, track.outcome, 3)
        score += _compute_score(tokens, module_titles, 2)
        score += _compute_score(tokens, module_objectives, 1)
        if score <= 0:
            continue
        scored.append(
            SearchResult(
                id=f"learn-{track.id}",
                title=track.title,
                description=track.outcome,
                href=f"/learn/{track.id}",
                score=score,
                badge=track.level.upper(),
            )
        )
    scored.sort(key=lambda item: item.score, reverse=True)
    return scored[:limit]


async def _search_models(
    session: AsyncSession,
    tokens: list[str],
    limit: int,
) -> list[SearchResult]:
    result = await session.execute(select(ModelProfile))
    profiles = result.scalars().all()
    scored: list[SearchResult] = []
    for model in profiles:
        tags = " ".join(model.modalities or [])
        score = _compute_score(tokens, model.name, 5)
        score += _compute_score(tokens, model.provider, 3)
        score += _compute_score(tokens, tags, 2)
        if score <= 0:
            continue
        description = f"{model.provider} | Context {model.context_window:,} tokens"
        scored.append(
            SearchResult(
                id=f"model-{model.id}",
                title=model.name,
                description=description,
                href="/models",
                score=score,
                badge=model.provider,
            )
        )
    scored.sort(key=lambda item: item.score, reverse=True)
    return scored[:limit]
