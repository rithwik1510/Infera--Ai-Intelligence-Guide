
"""Pydantic schemas for user models."""
from __future__ import annotations

from app.schemas.base import APIModel


class UserBase(APIModel):
    """Base schema for a user."""

    email: str


class UserCreate(UserBase):
    """Schema for creating a new user."""

    password: str


class User(UserBase):
    """Schema for a user as stored in the database."""

    id: int
    is_active: bool

    class Config:
        from_attributes = True
