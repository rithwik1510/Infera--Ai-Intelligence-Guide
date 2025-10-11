"""RSS ingestion worker entrypoint."""
from __future__ import annotations

import asyncio
from collections.abc import Iterable

from app.services.ingestion import RSSIngestor


def create_ingestor(sources: Iterable[dict[str, str]]) -> RSSIngestor:
    """Factory to build the RSS ingestor with the configured sources."""
    return RSSIngestor(sources)


async def run_worker_once(sources: Iterable[dict[str, str]]) -> None:
    """Run a single ingestion cycle for the provided sources."""
    ingestor = create_ingestor(sources)
    await ingestor.run()


async def run_forever(sources: Iterable[dict[str, str]], *, interval_seconds: int = 900) -> None:
    """Placeholder scheduler loop for continuous ingestion."""
    while True:
        await run_worker_once(sources)
        await asyncio.sleep(interval_seconds)
