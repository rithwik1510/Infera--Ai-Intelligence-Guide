"""Shared schema utilities."""
from __future__ import annotations

from pydantic import BaseModel, ConfigDict


def to_camel(string: str) -> str:
    """Convert snake_case strings to camelCase for JSON serialization."""
    parts = string.split("_")
    if not parts:
        return string
    head, *tail = parts
    return head + "".join(word.capitalize() for word in tail)


class CamelModel(BaseModel):
    """Base model that serializes fields using camelCase aliases."""

    model_config = ConfigDict(
        populate_by_name=True,
        alias_generator=to_camel,
        from_attributes=True,
    )


# Backwards compatibility alias used across the schemas package.
# Existing modules import ``APIModel`` as the canonical base class, so we expose
# the camelCase-enabled variant under that name.
APIModel = CamelModel
