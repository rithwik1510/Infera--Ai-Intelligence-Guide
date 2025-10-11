"""Learning track endpoints."""
from __future__ import annotations

from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.database import get_session
from app.schemas.learn import LearningTrackRead
from app.services.learn import fetch_learning_tracks

router = APIRouter(prefix="/learn", tags=["learn"])


@router.get("/tracks", response_model=list[LearningTrackRead], summary="List learning tracks")
async def list_learning_tracks(
    session: AsyncSession = Depends(get_session),
) -> list[LearningTrackRead]:  # noqa: ARG001
    """Return curated tracks seeded for the MVP experience."""
    return await fetch_learning_tracks(session)
