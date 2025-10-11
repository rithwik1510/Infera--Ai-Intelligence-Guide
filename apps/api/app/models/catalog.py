"""Database models for model comparisons and directory."""
from __future__ import annotations

from datetime import date, datetime

from sqlalchemy import JSON, Boolean, Date, DateTime, Float, ForeignKey, Integer, String, UniqueConstraint
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.database import Base
from app.db.utils import utc_now


class Benchmark(Base):
    __tablename__ = "benchmarks"

    id: Mapped[str] = mapped_column(String(64), primary_key=True)
    name: Mapped[str] = mapped_column(String(255), nullable=False)
    description: Mapped[str] = mapped_column(String(500), nullable=False)
    higher_is_better: Mapped[bool] = mapped_column(Boolean, default=True, nullable=False)
    unit: Mapped[str | None] = mapped_column(String(32))
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now)

    scores: Mapped[list["BenchmarkScore"]] = relationship(back_populates="benchmark", cascade="all, delete-orphan")


class ModelProfile(Base):
    __tablename__ = "model_profiles"

    id: Mapped[str] = mapped_column(String(64), primary_key=True)
    name: Mapped[str] = mapped_column(String(255), nullable=False)
    provider: Mapped[str] = mapped_column(String(255), nullable=False)
    release_date: Mapped[date] = mapped_column(Date)
    context_window: Mapped[int] = mapped_column(Integer)
    license: Mapped[str] = mapped_column(String(64))
    availability: Mapped[str] = mapped_column(String(32))
    max_tokens: Mapped[int | None] = mapped_column(Integer)
    modalities: Mapped[list[str] | None] = mapped_column(JSON, default=list)
    notes: Mapped[str | None] = mapped_column(String(500))
    summary: Mapped[str | None] = mapped_column(String(500))
    website: Mapped[str | None] = mapped_column(String(500))
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now)

    pricing: Mapped[list["PricingTier"]] = relationship(back_populates="model", cascade="all, delete-orphan")
    scores: Mapped[list["BenchmarkScore"]] = relationship(back_populates="model", cascade="all, delete-orphan")


class PricingTier(Base):
    __tablename__ = "pricing_tiers"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    model_id: Mapped[str] = mapped_column(String(64), ForeignKey("model_profiles.id", ondelete="CASCADE"))
    tier: Mapped[str] = mapped_column(String(32))
    price_per_million: Mapped[float] = mapped_column(Float)
    currency: Mapped[str] = mapped_column(String(8), default="USD")

    model: Mapped[ModelProfile] = relationship(back_populates="pricing")


class BenchmarkScore(Base):
    __tablename__ = "benchmark_scores"
    __table_args__ = (UniqueConstraint("model_id", "benchmark_id", name="uq_model_benchmark"),)

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    model_id: Mapped[str] = mapped_column(String(64), ForeignKey("model_profiles.id", ondelete="CASCADE"))
    benchmark_id: Mapped[str] = mapped_column(String(64), ForeignKey("benchmarks.id", ondelete="CASCADE"))
    raw_score: Mapped[float | None] = mapped_column(Float, nullable=True)
    normalized_score: Mapped[float | None] = mapped_column(Float, nullable=True)

    model: Mapped[ModelProfile] = relationship(back_populates="scores")
    benchmark: Mapped[Benchmark] = relationship(back_populates="scores")

