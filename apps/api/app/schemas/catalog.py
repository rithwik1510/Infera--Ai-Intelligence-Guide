"""Pydantic schemas for model comparisons."""
from __future__ import annotations

from datetime import date
from typing import Literal

from pydantic import Field, HttpUrl

from .base import CamelModel


class BenchmarkRead(CamelModel):
    id: str
    name: str
    description: str
    higher_is_better: bool = True
    unit: str | None = None


class PricingTierRead(CamelModel):
    tier: Literal["input", "output", "requests"]
    price_per_million: float = Field(ge=0)
    currency: str = "USD"


class BenchmarkScoreRead(CamelModel):
    benchmark_id: str
    score: float | None = None
    normalized_score: float | None = None
    source: HttpUrl | None = None


class ModelContextRead(CamelModel):
    max_tokens: int | None = None
    modalities: list[str] = Field(default_factory=lambda: ["text"])
    notes: str | None = None


class ModelProfileRead(CamelModel):
    id: str
    name: str
    provider: str
    release_date: date
    context_window: int
    license: str
    availability: Literal["api", "self-host", "hybrid"]
    benchmarks: list[BenchmarkScoreRead]
    pricing: list[PricingTierRead]
    context: ModelContextRead
    website: HttpUrl | None = None
    summary: str | None = None
    sources: list[HttpUrl] = Field(default_factory=list, min_length=1)


class ComparisonConfigRead(CamelModel):
    default_model_ids: list[str] = Field(min_length=2, max_length=4)
    benchmarks: list[BenchmarkRead]



