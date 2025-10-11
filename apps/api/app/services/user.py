
"""Service layer for user-related business logic."""
from __future__ import annotations

from typing import Any

from sqlalchemy.ext.asyncio import AsyncSession

from app.core.security import get_password_hash
from app.models.user import User
from app.schemas.user import UserCreate
from app.services.base import BaseService


class UserService(BaseService[User, UserCreate, Any]):
    """User service."""

    async def create(self, session: AsyncSession, *, obj_in: UserCreate) -> User:
        """Create a new user."""
        db_obj = User(
            email=obj_in.email,
            hashed_password=get_password_hash(obj_in.password),
            is_active=True,
        )
        session.add(db_obj)
        await session.commit()
        await session.refresh(db_obj)
        return db_obj


user_service = UserService(User)
