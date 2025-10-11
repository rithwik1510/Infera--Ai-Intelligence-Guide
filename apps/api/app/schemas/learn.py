"""Pydantic schemas for learning tracks."""
from __future__ import annotations

from typing import Literal

from pydantic import Field, HttpUrl

from .base import CamelModel


class ResourceRead(CamelModel):
    title: str
    url: HttpUrl
    type: Literal["article", "video", "docs", "github", "exercise"]
    description: str | None = None


class ModuleRead(CamelModel):
    title: str
    objective: str
    resources: list[ResourceRead] = Field(min_length=1, max_length=5)
    task: str


class CapstoneRead(CamelModel):
    title: str
    brief: str
    deliverable: str


class BadgeRead(CamelModel):
    name: str
    description: str
    icon: str | None = None


class LearningTrackRead(CamelModel):
    id: str
    title: str
    level: Literal["beginner", "intermediate", "advanced"]
    time_estimate_hours: int = Field(gt=0)
    outcome: str
    modules: list[ModuleRead] = Field(min_length=3)
    capstone: CapstoneRead
    badge: BadgeRead