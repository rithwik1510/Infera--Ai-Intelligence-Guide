"""Database models for news ingestion."""
from __future__ import annotations

from datetime import date, datetime
from typing import Optional

from sqlalchemy import JSON, Date, DateTime, Float, ForeignKey, Integer, String, Text
from sqlalchemy.orm import Mapped, mapped_column, relationship

from app.db.database import Base
from app.db.utils import utc_now


class NewsSource(Base):
    __tablename__ = "news_sources"

    id: Mapped[str] = mapped_column(String(64), primary_key=True)
    name: Mapped[str] = mapped_column(String(255), nullable=False)
    url: Mapped[str] = mapped_column(String(500), nullable=False, unique=True)
    gradient_start: Mapped[str] = mapped_column(String(9), nullable=False)
    gradient_end: Mapped[str] = mapped_column(String(9), nullable=False)
    weight: Mapped[float] = mapped_column(Float, nullable=False, default=1.0)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now)

    articles: Mapped[list["NewsArticle"]] = relationship(back_populates="source", cascade="all, delete-orphan")


class NewsArticle(Base):
    __tablename__ = "news_articles"

    id: Mapped[str] = mapped_column(String(128), primary_key=True)
    slug: Mapped[str] = mapped_column(String(255), unique=True, nullable=False)
    title: Mapped[str] = mapped_column(String(500), nullable=False)
    summary: Mapped[str] = mapped_column(Text, nullable=False)
    url: Mapped[str] = mapped_column(String(500), nullable=False)
    published_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), index=True)
    tags: Mapped[list[str]] = mapped_column(JSON, default=list)

    source_id: Mapped[str] = mapped_column(String(64), ForeignKey("news_sources.id"), index=True)
    source: Mapped[NewsSource] = relationship(back_populates="articles")

    github_repo_full_name: Mapped[Optional[str]] = mapped_column(String(255))
    github_stars: Mapped[Optional[int]] = mapped_column(Integer)
    github_delta_stars: Mapped[Optional[int]] = mapped_column(Integer)

    ranking_score: Mapped[float] = mapped_column(Float, nullable=False, default=0)
    hero_image: Mapped[Optional[str]] = mapped_column(String(500))
    content: Mapped[list[str]] = mapped_column(JSON, default=list)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now)


class WeeklyDigest(Base):
    __tablename__ = "weekly_digests"

    id: Mapped[int] = mapped_column(Integer, primary_key=True)
    week_of: Mapped[date] = mapped_column(Date, unique=True, nullable=False)
    headline: Mapped[str] = mapped_column(String(255), nullable=False)
    summary: Mapped[str] = mapped_column(Text, nullable=False)
    article_ids: Mapped[list[str]] = mapped_column(JSON, nullable=False)
    created_at: Mapped[datetime] = mapped_column(DateTime(timezone=True), default=utc_now)
