"""Comparison endpoints exposing benchmarks and models."""
from __future__ import annotations

from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.database import get_session
from app.schemas.catalog import ComparisonConfigRead, ModelProfileRead
from app.services.catalog import fetch_comparison_config, fetch_model_profiles

router = APIRouter(prefix="/comparisons", tags=["comparisons"])


@router.get("/config", response_model=ComparisonConfigRead, summary="Comparison configuration")
async def get_comparison_config_endpoint(
    session: AsyncSession = Depends(get_session),
) -> ComparisonConfigRead:  # noqa: ARG001
    """Return comparison configuration backed by the catalog database."""
    return await fetch_comparison_config(session)


@router.get("/models", response_model=list[ModelProfileRead], summary="List model profiles")
async def list_model_profiles(
    session: AsyncSession = Depends(get_session),
) -> list[ModelProfileRead]:  # noqa: ARG001
    """Return model profiles with benchmark and pricing metadata."""
    return await fetch_model_profiles(session)
