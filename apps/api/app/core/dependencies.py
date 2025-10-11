
"""FastAPI dependencies and authentication utilities."""
from __future__ import annotations

from typing import Annotated

from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from jose import JWTError, jwt
from sqlalchemy.ext.asyncio import AsyncSession

from app.core.config import settings
from app.db.database import get_session
from app.models.user import User
from app.schemas.token import TokenPayload
from app.services.user import user_service

reusable_oauth2 = OAuth2PasswordBearer(tokenUrl="/auth/token")


async def get_current_user(
    session: Annotated[AsyncSession, Depends(get_session)], token: Annotated[str, Depends(reusable_oauth2)]
) -> User:
    """Get the current user from a JWT token."""
    try:
        payload = jwt.decode(
            token,
            settings.jwt_secret_key.get_secret_value(),
            algorithms=[settings.jwt_algorithm],
        )
        token_data = TokenPayload(**payload)
    except (JWTError, Exception) as e:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail=f"Could not validate credentials: {e}",
        ) from e

    user = await user_service.get(session, id=token_data.sub)
    if not user:
        raise HTTPException(status_code=404, detail="User not found")
    return user


async def get_current_active_user(
    current_user: Annotated[User, Depends(get_current_user)]
) -> User:
    """Get the current active user."""
    if not current_user.is_active:
        raise HTTPException(status_code=400, detail="Inactive user")
    return current_user
