"""Search response schemas."""
from __future__ import annotations

from enum import Enum

from pydantic import Field

from .base import CamelModel


class SearchCategory(str, Enum):
    NEWS = "news"
    COMPARISONS = "comparisons"
    LEARN = "learn"
    MODELS = "models"


class SearchResult(CamelModel):
    id: str
    title: str
    description: str
    href: str
    score: float
    badge: str | None = None
    meta: str | None = None
    is_external: bool | None = Field(default=False, alias="isExternal")


class SearchGroup(CamelModel):
    category: SearchCategory
    label: str
    results: list[SearchResult]


class SearchResponse(CamelModel):
    query: str
    total: int
    groups: list[SearchGroup]
