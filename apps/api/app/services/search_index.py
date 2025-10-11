"""Utilities for syncing search content to Meilisearch."""
from __future__ import annotations

import asyncio
import logging
from collections.abc import Iterable
from datetime import datetime
from typing import Any

try:
    from meilisearch import Client as MeiliClient
except ImportError:  # pragma: no cover - optional dependency
    MeiliClient = None  # type: ignore[assignment]

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from app.core.config import settings
from app.models.catalog import Benchmark, ModelProfile
from app.models.learn import LearningTrack
from app.models.news import NewsArticle, NewsSource

LOGGER = logging.getLogger(__name__)

INDEX_NAMES = {
    "news": "ai-helper-news",
    "comparisons": "ai-helper-comparisons",
    "learn": "ai-helper-learn",
    "models": "ai-helper-models",
}


async def sync_meilisearch(session: AsyncSession) -> None:
    """Push the latest database state into Meilisearch indexes."""

    client = _get_client()
    if client is None:
        raise RuntimeError("Meilisearch client is not configured. Set AI_HELPER_MEILISEARCH_URL.")

    payloads = await _collect_documents(session)
    loop = asyncio.get_running_loop()

    async def push(index_key: str, docs: list[dict[str, Any]]) -> None:
        if not docs:
            return

        index_name = INDEX_NAMES[index_key]

        def _upload() -> None:
            index = client.index(index_name)
            index.add_documents(docs, primary_key="id")

        await loop.run_in_executor(None, _upload)

    for key, docs in payloads.items():
        await push(key, docs)


async def _collect_documents(session: AsyncSession) -> dict[str, list[dict[str, Any]]]:
    news_docs = await _collect_news(session)
    comparison_docs = await _collect_comparisons(session)
    learn_docs = await _collect_learn(session)
    model_docs = await _collect_models(session)

    return {
        "news": news_docs,
        "comparisons": comparison_docs,
        "learn": learn_docs,
        "models": model_docs,
    }


async def _collect_news(session: AsyncSession) -> list[dict[str, Any]]:
    result = await session.execute(
        select(NewsArticle)
        .options(selectinload(NewsArticle.source))
        .order_by(NewsArticle.published_at.desc())
    )
    documents: list[dict[str, Any]] = []
    for article in result.scalars():
        source: NewsSource | None = article.source
        documents.append(
            {
                "id": article.id,
                "title": article.title,
                "summary": article.summary,
                "slug": article.slug,
                "tags": article.tags or [],
                "source": source.name if source else article.source_id,
                "source_id": article.source_id,
                "published_at": article.published_at.isoformat() if article.published_at else None,
                "score": float(article.ranking_score or 0),
                "hero_image": article.hero_image,
                "url": article.url,
            }
        )
    return documents


async def _collect_comparisons(session: AsyncSession) -> list[dict[str, Any]]:
    benchmark_result = await session.execute(select(Benchmark))
    model_result = await session.execute(select(ModelProfile))
    documents: list[dict[str, Any]] = []
    for benchmark in benchmark_result.scalars():
        documents.append(
            {
                "id": f"benchmark-{benchmark.id}",
                "type": "benchmark",
                "title": benchmark.name,
                "description": benchmark.description,
                "unit": benchmark.unit,
                "higher_is_better": benchmark.higher_is_better,
            }
        )
    for model in model_result.scalars():
        documents.append(
            {
                "id": f"comparison-model-{model.id}",
                "type": "model",
                "title": model.name,
                "provider": model.provider,
                "context_window": model.context_window,
                "availability": model.availability,
                "notes": model.notes,
                "modalities": model.modalities or [],
            }
        )
    return documents


async def _collect_learn(session: AsyncSession) -> list[dict[str, Any]]:
    result = await session.execute(select(LearningTrack))
    documents: list[dict[str, Any]] = []
    for track in result.scalars():
        documents.append(
            {
                "id": f"learn-{track.id}",
                "title": track.title,
                "outcome": track.outcome,
                "level": track.level,
                "modules": track.modules,
            }
        )
    return documents


async def _collect_models(session: AsyncSession) -> list[dict[str, Any]]:
    result = await session.execute(select(ModelProfile))
    documents: list[dict[str, Any]] = []
    for model in result.scalars():
        documents.append(
            {
                "id": f"model-{model.id}",
                "title": model.name,
                "provider": model.provider,
                "context_window": model.context_window,
                "modalities": model.modalities or [],
                "license": model.license,
            }
        )
    return documents


def _get_client() -> MeiliClient | None:
    if MeiliClient is None:
        LOGGER.warning("meilisearch dependency not installed; skipping client configuration")
        return None

    if not settings.meilisearch_url:
        return None

    return MeiliClient(str(settings.meilisearch_url), settings.meilisearch_api_key or None)
