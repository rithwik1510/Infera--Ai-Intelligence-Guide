"""FastAPI application factory for the AI Helper backend."""
from __future__ import annotations

from contextlib import asynccontextmanager

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.config import settings
from app.core.logging import setup_logging
from app.db.database import engine
from app.db.init import init_db
from app.middleware.instrumentation import InstrumentationMiddleware
from app.data.news_feeds import NEWS_FEED_SOURCES
from app.services.ingestion import RSSIngestor
from app.workers.scheduler import IngestionScheduler
from .routers import comparisons, health, learn, news, search, metrics, auth, users

API_TITLE = "AI Helper API"
API_DESCRIPTION = (
    "Backend services for the AI Helper platform, providing news ingestion, "
    "comparisons data, learning tracks, and model directory APIs."
)


def create_app() -> FastAPI:
    """Instantiate and configure the FastAPI application."""

    setup_logging()

    scheduler_ref: IngestionScheduler | None = None

    @asynccontextmanager
    async def lifespan(app: FastAPI):  # noqa: D401
        """Initialize database connections, seeds, and background workers."""
        nonlocal scheduler_ref
        await init_db()
        if settings.ingestion_enabled:
            ingestor = RSSIngestor(NEWS_FEED_SOURCES)

            async def runner() -> None:
                await ingestor.run()

            scheduler_ref = IngestionScheduler(
                interval_seconds=float(settings.ingestion_interval_minutes) * 60.0,
                runner=runner,
            )
            scheduler_ref.start()
        try:
            yield
        finally:
            if scheduler_ref:
                await scheduler_ref.stop()
            await engine.dispose()

    app = FastAPI(
        title=API_TITLE,
        description=API_DESCRIPTION,
        version="0.1.0",
        lifespan=lifespan,
    )

    if settings.cors_origins:
        app.add_middleware(
            CORSMiddleware,
            allow_origins=settings.cors_origins,
            allow_credentials=True,
            allow_methods=["*"],
            allow_headers=["*"],
        )

    app.include_router(health.router)
    app.include_router(news.router)
    app.include_router(comparisons.router)
    app.include_router(learn.router)
    app.include_router(search.router)
    app.include_router(auth.router)
    app.include_router(users.router)
    if settings.metrics_enabled:
        app.include_router(metrics.router)
        app.add_middleware(InstrumentationMiddleware)

    return app


app = create_app()
