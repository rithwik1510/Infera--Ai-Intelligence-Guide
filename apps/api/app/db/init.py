"""Database initialization and seed helpers."""
from __future__ import annotations

import asyncio
from pathlib import Path

from alembic import command
from alembic.config import Config
from sqlalchemy import func, select
from sqlalchemy.ext.asyncio import AsyncSession

from app.data.comparisons import COMPARISON_CONFIG, MODEL_PROFILES
from app.data.learn import LEARNING_TRACKS
from app.data.news import NEWS_SOURCES, PLACEHOLDER_ARTICLES, WEEKLY_DIGEST
from app.core.config import settings
from app.db.database import SessionLocal
from app.models.catalog import Benchmark, BenchmarkScore, ModelProfile, PricingTier
from app.models.learn import LearningTrack
from app.models.news import NewsArticle, NewsSource, WeeklyDigest


async def init_db() -> None:
    """Create database schema and seed baseline data if needed."""
    await _run_migrations()

    async with SessionLocal() as session:
        await _seed_news(session)
        await _seed_comparisons(session)
        await _seed_learning_tracks(session)
        await session.commit()


async def _seed_news(session: AsyncSession) -> None:
    source_count = await session.scalar(select(func.count()).select_from(NewsSource))
    if not source_count:
        for source in NEWS_SOURCES:
            session.add(
                NewsSource(
                    id=source.id,
                    name=source.name,
                    url=str(source.url),
                    gradient_start=source.gradient[0],
                    gradient_end=source.gradient[1],
                    weight=source.weight,
                )
            )

    article_count = await session.scalar(select(func.count()).select_from(NewsArticle))
    if not article_count:
        for article in PLACEHOLDER_ARTICLES:
            session.add(
                NewsArticle(
                    id=article.id,
                    slug=article.slug,
                    title=article.title,
                    summary=article.summary,
                    url=str(article.url),
                    published_at=article.published_at,
                    tags=article.tags,
                    source_id=article.source_id,
                    github_repo_full_name=article.github_repo.full_name if article.github_repo else None,
                    github_stars=article.github_repo.stars if article.github_repo else None,
                    github_delta_stars=article.github_repo.delta_stars if article.github_repo else None,
                    ranking_score=article.score,
                    hero_image=str(article.hero_image) if article.hero_image else None,
                    content=article.content,
                )
            )

    digest_count = await session.scalar(select(func.count()).select_from(WeeklyDigest))
    if not digest_count and WEEKLY_DIGEST:
        session.add(
            WeeklyDigest(
                week_of=WEEKLY_DIGEST.week_of,
                headline=WEEKLY_DIGEST.headline,
                summary=WEEKLY_DIGEST.summary,
                article_ids=WEEKLY_DIGEST.article_ids,
            )
        )


async def _seed_comparisons(session: AsyncSession) -> None:
    benchmark_count = await session.scalar(select(func.count()).select_from(Benchmark))
    if not benchmark_count:
        for benchmark in COMPARISON_CONFIG.benchmarks:
            session.add(
                Benchmark(
                    id=benchmark.id,
                    name=benchmark.name,
                    description=benchmark.description,
                    higher_is_better=benchmark.higher_is_better,
                    unit=benchmark.unit,
                )
            )

    model_count = await session.scalar(select(func.count()).select_from(ModelProfile))
    if not model_count:
        for model in MODEL_PROFILES:
            db_model = ModelProfile(
                id=model.id,
                name=model.name,
                provider=model.provider,
                release_date=model.release_date,
                context_window=model.context_window,
                license=model.license,
                availability=model.availability,
                max_tokens=model.context.max_tokens,
                modalities=model.context.modalities,
                notes=model.context.notes,
                summary=model.summary,
                website=str(model.website) if model.website else None,
            )
            session.add(db_model)
            for tier in model.pricing:
                session.add(
                    PricingTier(
                        model=db_model,
                        tier=tier.tier,
                        price_per_million=tier.price_per_million,
                        currency=tier.currency,
                    )
                )
            for score in model.benchmarks:
                session.add(
                    BenchmarkScore(
                        model=db_model,
                        benchmark_id=score.benchmark_id,
                        raw_score=score.score,
                        normalized_score=score.normalized_score,
                    )
                )


async def _seed_learning_tracks(session: AsyncSession) -> None:
    track_count = await session.scalar(select(func.count()).select_from(LearningTrack))
    if not track_count:
        for track in LEARNING_TRACKS:
            session.add(
                LearningTrack(
                    id=track.id,
                    title=track.title,
                    level=track.level,
                    time_estimate_hours=track.time_estimate_hours,
                    outcome=track.outcome,
                    modules=[module.model_dump(mode="json", by_alias=False) for module in track.modules],
                    capstone=track.capstone.model_dump(mode="json", by_alias=False),
                    badge=track.badge.model_dump(mode="json", by_alias=False),
                )
            )

async def _run_migrations() -> None:
    """Apply Alembic migrations to the configured database."""

    loop = asyncio.get_running_loop()
    await loop.run_in_executor(None, _upgrade_database)


def _upgrade_database() -> None:
    """Run Alembic upgrade synchronously within a thread executor."""

    config = _get_alembic_config()
    command.upgrade(config, "head")


def _get_alembic_config() -> Config:
    """Construct Alembic configuration bound to the current database URL."""

    base_dir = Path(__file__).resolve().parent.parent.parent
    alembic_ini = base_dir / "alembic.ini"
    config = Config(str(alembic_ini))
    script_location = base_dir / "alembic"
    config.set_main_option("script_location", str(script_location))
    config.set_main_option("sqlalchemy.url", str(settings.database_url))
    return config




