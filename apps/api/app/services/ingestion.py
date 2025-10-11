"""RSS ingestion pipeline."""
from __future__ import annotations

import asyncio
import logging
import math
import re
import time
from collections.abc import Awaitable, Callable, Iterable
from dataclasses import dataclass
from datetime import datetime, timedelta, timezone
from typing import Any

import feedparser
from sqlalchemy import delete, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.database import SessionLocal
from app.models.news import NewsArticle, NewsSource, WeeklyDigest
from app.schemas.news import GithubRepoRead

LOGGER = logging.getLogger(__name__)

FetchResult = Any
FetchCallable = Callable[[dict[str, Any]], Awaitable[FetchResult]]
SessionFactory = Callable[[], AsyncSession]


@dataclass(slots=True)
class FeedEntry:
    """Normalized representation of a feed item."""

    id: str
    slug: str
    title: str
    link: str
    published_at: datetime
    summary: str
    tags: list[str]
    score: float = 0.0
    hero_image: str | None = None
    github_repo: GithubRepoRead | None = None


class RSSIngestor:
    """Loads, normalizes, and persists RSS feed entries."""

    def __init__(
        self,
        sources: Iterable[dict[str, Any]],
        *,
        session_factory: SessionFactory | None = None,
        fetcher: FetchCallable | None = None,
        retention_days: int = 60,
        max_articles: int = 500,
        digest_size: int = 10,
    ) -> None:
        self.sources = list(sources)
        self._source_lookup = {source["id"]: source for source in self.sources if "id" in source}
        self.session_factory = session_factory or SessionLocal
        self._fetcher = fetcher or self._default_fetch
        self.retention_days = max(retention_days, 0)
        self.max_articles = max(max_articles, 0)
        self.digest_size = max(digest_size, 1)

    async def run(self) -> None:
        """Fetch feeds and upsert entries into the database."""

        if not self.sources:
            LOGGER.warning("RSSIngestor.run called with no sources configured")
            return

        async with self.session_factory() as session:
            for source in self.sources:
                await self._ensure_source(session, source)
                try:
                    feed = await self._fetcher(source)
                except Exception as exc:  # pragma: no cover - defensive logging
                    LOGGER.exception("Failed to fetch feed %s: %s", source.get("feed_url"), exc)
                    continue

                entries = self._normalize_entries(source["id"], feed)
                if not entries:
                    LOGGER.info("No entries to ingest for source %s", source["id"])
                    continue

                await self._persist_entries(session, source, entries)

            await self._refresh_digest(session)
            await self._prune_articles(session)
            await session.commit()

    async def _ensure_source(self, session: AsyncSession, source: dict[str, Any]) -> None:
        result = await session.execute(select(NewsSource).where(NewsSource.id == source["id"]))
        existing = result.scalar_one_or_none()
        gradient = source.get("gradient", ("#111111", "#222222"))
        weight = float(source.get("weight", 1.0))
        if existing:
            existing.name = source.get("name", existing.name)
            existing.url = source.get("url", existing.url)
            existing.gradient_start = gradient[0]
            existing.gradient_end = gradient[1]
            existing.weight = weight
        else:
            session.add(
                NewsSource(
                    id=source["id"],
                    name=source.get("name", source["id"].title()),
                    url=source.get("url", source.get("feed_url", "")),
                    gradient_start=gradient[0],
                    gradient_end=gradient[1],
                    weight=weight,
                )
            )

    async def _persist_entries(
        self,
        session: AsyncSession,
        source: dict[str, Any],
        entries: list[FeedEntry],
    ) -> None:
        for entry in entries:
            computed_score = self._calculate_score(entry, source)
            existing = await session.get(NewsArticle, entry.id)
            if existing:
                existing.slug = entry.slug
                existing.title = entry.title
                existing.summary = entry.summary
                existing.url = entry.link
                existing.published_at = entry.published_at
                existing.tags = entry.tags
                existing.github_repo_full_name = entry.github_repo.full_name if entry.github_repo else None
                existing.github_stars = entry.github_repo.stars if entry.github_repo else None
                existing.github_delta_stars = entry.github_repo.delta_stars if entry.github_repo else None
                existing.ranking_score = computed_score
                existing.hero_image = entry.hero_image
                existing.content = [entry.summary]
            else:
                session.add(
                    NewsArticle(
                        id=entry.id,
                        slug=entry.slug,
                        title=entry.title,
                        summary=entry.summary,
                        url=entry.link,
                        published_at=entry.published_at,
                        tags=entry.tags,
                        source_id=source["id"],
                        github_repo_full_name=entry.github_repo.full_name if entry.github_repo else None,
                        github_stars=entry.github_repo.stars if entry.github_repo else None,
                        github_delta_stars=entry.github_repo.delta_stars if entry.github_repo else None,
                        ranking_score=computed_score,
                        hero_image=entry.hero_image,
                        content=[entry.summary],
                    )
                )

    def _calculate_score(self, entry: FeedEntry, source: dict[str, Any]) -> float:
        """Blend recency, source weight, and feed-provided score into a ranking value."""

        now = datetime.now(timezone.utc)
        age_seconds = max((now - entry.published_at).total_seconds(), 0.0)
        age_hours = age_seconds / 3600.0
        recency_component = math.exp(-age_hours / 36.0) * 100.0

        source_weight = float(source.get("weight", 1.0) or 1.0)
        base_score = float(entry.score or 0.0)

        github_bonus = 0.0
        if entry.github_repo:
            stars = float(entry.github_repo.stars or 0)
            delta = float(entry.github_repo.delta_stars or 0)
            github_bonus = min(stars / 500.0, 8.0) + min(delta, 75.0)

        total = (recency_component * source_weight) + base_score + github_bonus
        return round(total, 2)

    async def _refresh_digest(self, session: AsyncSession) -> None:
        """Create or update the weekly digest from the freshest articles."""

        if not self.digest_size:
            return

        now = datetime.now(timezone.utc)
        window_start = now - timedelta(days=14)
        result = await session.execute(
            select(NewsArticle)
            .where(NewsArticle.published_at >= window_start)
            .order_by(NewsArticle.ranking_score.desc(), NewsArticle.published_at.desc())
            .limit(self.digest_size)
        )
        top_articles = result.scalars().all()
        if not top_articles:
            return

        week_start = (now - timedelta(days=now.weekday())).date()
        digest_ids = [article.id for article in top_articles]
        summary_snippets = []
        for article in top_articles[:5]:
            source_meta = self._source_lookup.get(article.source_id, {})
            source_name = source_meta.get("name") or article.source_id.upper()
            summary_snippets.append(f"{source_name}: {article.title}")

        headline = f"Top AI launches · Week of {week_start.strftime('%b %d')}"
        summary = " • ".join(summary_snippets)

        existing_result = await session.execute(
            select(WeeklyDigest).where(WeeklyDigest.week_of == week_start)
        )
        digest = existing_result.scalars().first()
        if digest:
            digest.headline = headline
            digest.summary = summary
            digest.article_ids = digest_ids
        else:
            session.add(
                WeeklyDigest(
                    week_of=week_start,
                    headline=headline,
                    summary=summary,
                    article_ids=digest_ids,
                )
            )

    async def _prune_articles(self, session: AsyncSession) -> None:
        """Trim stale or excess articles to keep the feed focused."""

        now = datetime.now(timezone.utc)

        if self.retention_days:
            cutoff = now - timedelta(days=self.retention_days)
            await session.execute(
                delete(NewsArticle).where(NewsArticle.published_at < cutoff)
            )

        if self.max_articles:
            result = await session.execute(
                select(NewsArticle.id).order_by(NewsArticle.published_at.desc())
            )
            ids = result.scalars().all()
            if len(ids) > self.max_articles:
                to_remove = ids[self.max_articles :]
                if to_remove:
                    await session.execute(
                        delete(NewsArticle).where(NewsArticle.id.in_(to_remove))
                    )
    async def _default_fetch(self, source: dict[str, Any]) -> FetchResult:
        feed_url = source.get("feed_url")
        if not feed_url:
            raise ValueError(f"Source {source['id']} missing feed_url")

        loop = asyncio.get_running_loop()
        return await loop.run_in_executor(None, feedparser.parse, feed_url)

    def _normalize_entries(self, source_id: str, feed: FetchResult) -> list[FeedEntry]:
        normalized: list[FeedEntry] = []
        entries = getattr(feed, "entries", None)
        if callable(entries):
            entries = entries()
        if entries is None and isinstance(feed, dict):
            entries = feed.get("entries")
        if entries is None:
            items_attr = getattr(feed, "items", None)
            if callable(items_attr):
                maybe_entries = items_attr()
                if isinstance(maybe_entries, list):
                    entries = maybe_entries
        if entries is None:
            entries = []
        for raw in entries:
            entry = self._normalize_entry(source_id, raw)
            if entry:
                normalized.append(entry)
        return normalized

    def _normalize_entry(self, source_id: str, raw: Any) -> FeedEntry | None:
        title = _get_first(raw, "title", default="")
        link = _get_first(raw, "link", default="")
        summary_raw = _get_first(raw, "summary", default="")
        summary = _strip_html(summary_raw)
        if not title or not link:
            return None

        entry_id = _get_first(raw, "id", default=link)
        slug = _slugify(entry_id or title)
        published_at = _parse_datetime(raw)
        tags = list(dict.fromkeys(_extract_tags(raw)))[:6]
        score = _extract_score(raw)
        hero_image = _extract_hero_image(raw)
        github_repo = _extract_github(raw)

        return FeedEntry(
            id=f"{source_id}:{entry_id}",
            slug=slug,
            title=title.strip(),
            link=link,
            published_at=published_at,
            summary=summary.strip(),
            tags=tags,
            score=score,
            hero_image=hero_image,
            github_repo=github_repo,
        )


def _get_first(raw: Any, key: str, default: str | None = None) -> str:
    value = getattr(raw, key, None)
    if not value and isinstance(raw, dict):
        value = raw.get(key)
    if isinstance(value, list) and value:
        value = value[0]
    if value is None:
        return default or ""
    return str(value)


def _strip_html(value: str) -> str:
    if not value:
        return ""
    text = re.sub(r"<[^>]+>", " ", value)
    return re.sub(r"\s+", " ", text).strip()


def _parse_datetime(raw: Any) -> datetime:
    struct_time = getattr(raw, "published_parsed", None) or getattr(raw, "updated_parsed", None)
    if struct_time:
        return datetime.fromtimestamp(time.mktime(struct_time), tz=timezone.utc)

    for key in ("published", "updated", "created"):
        value = _get_first(raw, key)
        if value:
            try:
                return datetime.fromisoformat(value.replace("Z", "+00:00"))
            except ValueError:
                continue
    return datetime.now(timezone.utc)


def _extract_tags(raw: Any) -> list[str]:
    tags = []
    raw_tags = getattr(raw, "tags", None) or []
    for tag in raw_tags:
        term = getattr(tag, "term", None) or (tag.get("term") if isinstance(tag, dict) else None)
        if term:
            tags.append(term)
    return tags


def _extract_hero_image(raw: Any) -> str | None:
    for key in ("media_content", "media_thumbnail"):
        media = getattr(raw, key, None) or raw.get(key) if isinstance(raw, dict) else None
        if media:
            if isinstance(media, list):
                item = media[0]
            else:
                item = media
            url = item.get("url") if isinstance(item, dict) else getattr(item, "url", None)
            if url:
                return str(url)
    return None


def _extract_github(raw: Any) -> GithubRepoRead | None:
    links = getattr(raw, "links", None)
    if not links and isinstance(raw, dict):
        links = raw.get("links")
    if not links:
        return None
    for link in links:
        href = link.get("href") if isinstance(link, dict) else getattr(link, "href", "")
        if href and "github.com" in href:
            repo_full_name = "".join(href.split("github.com/")[1:]).strip("/")
            if repo_full_name:
                return GithubRepoRead(full_name=repo_full_name, stars=0, delta_stars=0)
    return None


def _extract_score(raw: Any) -> float:
    score_value = _get_first(raw, "ai_helper_score") or _get_first(raw, "score")
    try:
        return float(score_value)
    except (TypeError, ValueError):
        return 0.0


def _slugify(value: str) -> str:
    value = value.lower()
    value = re.sub(r"[^a-z0-9]+", "-", value)
    value = re.sub(r"-+", "-", value).strip('-')
    return value or "entry"
