"""Comparison catalog services."""
from __future__ import annotations

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from app.data.comparisons import COMPARISON_CONFIG, MODEL_PROFILES
from app.models.catalog import Benchmark, BenchmarkScore, ModelProfile
from app.schemas.catalog import (
    BenchmarkRead,
    BenchmarkScoreRead,
    ComparisonConfigRead,
    ModelContextRead,
    ModelProfileRead,
    PricingTierRead,
)

_seed_model_lookup = {model.id: model for model in MODEL_PROFILES}
_seed_benchmark_lookup = {
    (model.id, score.benchmark_id): score for model in MODEL_PROFILES for score in model.benchmarks
}


def _score_source_for(model_id: str, benchmark_id: str) -> str | None:
    seed_score = _seed_benchmark_lookup.get((model_id, benchmark_id))
    return str(seed_score.source) if seed_score and seed_score.source else None


async def fetch_comparison_config(session: AsyncSession) -> ComparisonConfigRead:
    """Return comparison configuration derived from database state."""
    benchmarks_result = await session.execute(select(Benchmark).order_by(Benchmark.id))
    benchmarks = [
        BenchmarkRead(
            id=benchmark.id,
            name=benchmark.name,
            description=benchmark.description,
            higher_is_better=benchmark.higher_is_better,
            unit=benchmark.unit,
        )
        for benchmark in benchmarks_result.scalars().all()
    ]
    return ComparisonConfigRead(
        default_model_ids=COMPARISON_CONFIG.default_model_ids,
        benchmarks=benchmarks,
    )


async def fetch_model_profiles(session: AsyncSession) -> list[ModelProfileRead]:
    """Return model profiles with pricing and benchmark details."""
    result = await session.execute(
        select(ModelProfile)
        .options(
            selectinload(ModelProfile.pricing),
            selectinload(ModelProfile.scores).selectinload(BenchmarkScore.benchmark),
        )
        .order_by(ModelProfile.provider, ModelProfile.name)
    )
    profiles: list[ModelProfileRead] = []
    for model in result.scalars().unique():
        pricing = [
            PricingTierRead(
                tier=tier.tier,
                price_per_million=tier.price_per_million,
                currency=tier.currency,
            )
            for tier in sorted(model.pricing, key=lambda t: t.tier)
        ]
        scores = [
            BenchmarkScoreRead(
                benchmark_id=score.benchmark_id,
                score=score.raw_score,
                normalized_score=score.normalized_score,
                source=_score_source_for(model.id, score.benchmark_id),
            )
            for score in sorted(model.scores, key=lambda s: s.benchmark_id)
        ]
        seed = _seed_model_lookup.get(model.id)
        profiles.append(
            ModelProfileRead(
                id=model.id,
                name=model.name,
                provider=model.provider,
                release_date=model.release_date,
                context_window=model.context_window,
                license=model.license,
                availability=model.availability,
                benchmarks=scores,
                pricing=pricing,
                context=ModelContextRead(
                    max_tokens=model.max_tokens,
                    modalities=model.modalities or ["text"],
                    notes=model.notes,
                ),
                website=model.website,
                summary=model.summary,
                sources=[str(url) for url in (seed.sources if seed else [])],
            )
        )
    return profiles
