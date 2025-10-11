
"""Pydantic schemas for authentication tokens."""
from __future__ import annotations

from app.schemas.base import APIModel


class Token(APIModel):
    """Schema for an access token."""

    access_token: str
    token_type: str


class TokenPayload(APIModel):
    """Schema for the data encoded in a token."""

    sub: str | None = None
