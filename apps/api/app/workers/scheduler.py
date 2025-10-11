"""Background scheduler for ingestion."""
from __future__ import annotations

import asyncio
import logging
from collections.abc import Awaitable, Callable

LOGGER = logging.getLogger(__name__)


class IngestionScheduler:
    """Periodically executes the provided coroutine."""

    def __init__(
        self,
        interval_seconds: float,
        runner: Callable[[], Awaitable[None]],
    ) -> None:
        self._interval = interval_seconds
        self._runner = runner
        self._task: asyncio.Task | None = None
        self._stop_event = asyncio.Event()

    def start(self) -> None:
        if self._task and not self._task.done():
            return
        self._stop_event.clear()
        self._task = asyncio.create_task(self._loop())

    async def stop(self) -> None:
        self._stop_event.set()
        if self._task:
            await self._task

    async def _loop(self) -> None:
        while not self._stop_event.is_set():
            try:
                await self._runner()
            except Exception as exc:  # pragma: no cover - defensive logging
                LOGGER.exception("Ingestion task failed: %s", exc)
            try:
                await asyncio.wait_for(self._stop_event.wait(), timeout=self._interval)
            except asyncio.TimeoutError:
                continue
