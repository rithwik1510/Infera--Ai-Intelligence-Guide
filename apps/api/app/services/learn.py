
"""Learning services."""
from __future__ import annotations

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.models.learn import LearningTrack
from app.schemas.learn import BadgeRead, CapstoneRead, LearningTrackRead, ModuleRead


async def fetch_learning_tracks(session: AsyncSession) -> list[LearningTrackRead]:
    """Return curated learning tracks from the database."""
    result = await session.execute(select(LearningTrack).order_by(LearningTrack.title))
    tracks: list[LearningTrackRead] = []
    for track in result.scalars().all():
        modules = [ModuleRead.model_validate(module) for module in track.modules]
        capstone = CapstoneRead.model_validate(track.capstone)
        badge = BadgeRead.model_validate(track.badge)
        tracks.append(
            LearningTrackRead(
                id=track.id,
                title=track.title,
                level=track.level,
                time_estimate_hours=track.time_estimate_hours,
                outcome=track.outcome,
                modules=modules,
                capstone=capstone,
                badge=badge,
            )
        )
    return tracks
