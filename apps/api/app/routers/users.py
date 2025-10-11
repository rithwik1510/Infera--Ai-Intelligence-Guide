
"""API router for users."""
from __future__ import annotations

from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.dependencies import get_current_active_user
from app.db.database import get_session
from app.models.user import User as UserModel
from app.schemas.user import User, UserCreate
from app.services.user import user_service

router = APIRouter(tags=["users"])


@router.post("/users/register", response_model=User, status_code=201)
async def register_user(
    *, session: Annotated[AsyncSession, Depends(get_session)], user_in: UserCreate
):
    """Create a new user."""
    user = await user_service.get_by(session, email=user_in.email)
    if user:
        raise HTTPException(
            status_code=400,
            detail="The user with this email already exists in the system.",
        )
    user = await user_service.create(session, obj_in=user_in)
    return user


@router.get("/users/me", response_model=User)
async def read_users_me(current_user: Annotated[UserModel, Depends(get_current_active_user)]):
    """Fetch the current logged in user."""
    return current_user
