"""Search endpoints."""
from __future__ import annotations

from fastapi import APIRouter, Depends, Query
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.database import get_session
from app.schemas.search import SearchResponse
from app.services.search import search_content

router = APIRouter(prefix="/search", tags=["search"])


@router.get("", response_model=SearchResponse, summary="Search across content")
async def run_search(
    q: str = Query("", min_length=0, description="Search query"),
    session: AsyncSession = Depends(get_session),
) -> SearchResponse:
    """Execute a search across news, comparisons, learn tracks, and models."""
    return await search_content(session, q)
