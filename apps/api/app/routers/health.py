"""Healthcheck endpoints."""
from __future__ import annotations

from fastapi import APIRouter

router = APIRouter(prefix="/health", tags=["health"])


@router.get("", summary="Service liveness probe")
async def healthcheck() -> dict[str, str]:
    """Return a simple payload to indicate the API is reachable."""
    return {"status": "ok"}
