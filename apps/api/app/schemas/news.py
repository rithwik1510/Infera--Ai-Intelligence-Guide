"""Pydantic schemas for news resources."""
from __future__ import annotations

from datetime import datetime, date

from pydantic import Field, HttpUrl

from .base import CamelModel


class NewsSourceRead(CamelModel):
    id: str
    name: str
    url: HttpUrl
    gradient: tuple[str, str] = Field(..., description="Start and end hex colors")
    weight: float = Field(ge=0)


class GithubRepoRead(CamelModel):
    full_name: str
    stars: int = Field(ge=0)
    delta_stars: int


class NewsArticleRead(CamelModel):
    id: str
    title: str
    slug: str
    source_id: str
    url: HttpUrl
    summary: str
    tags: list[str] = Field(default_factory=list)
    published_at: datetime
    score: float
    github_repo: GithubRepoRead | None = None
    hero_image: HttpUrl | None = None
    content: list[str] = Field(default_factory=list)


class WeeklyDigestRead(CamelModel):
    week_of: date
    headline: str
    summary: str
    article_ids: list[str] = Field(default_factory=list, max_length=10)


class NewsPayload(CamelModel):
    sources: list[NewsSourceRead]
    articles: list[NewsArticleRead]
    digest: WeeklyDigestRead | None = None


class NewsArticleDetail(CamelModel):
    article: NewsArticleRead
    source: NewsSourceRead | None = None
    related: list[NewsArticleRead] = Field(default_factory=list, max_length=6)
