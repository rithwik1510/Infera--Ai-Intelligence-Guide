"""Convenience script to trigger an RSS ingestion cycle from the CLI."""
from __future__ import annotations

import asyncio
from datetime import datetime

from sqlalchemy import func, select

from app.data.news_feeds import NEWS_FEED_SOURCES
from app.db.database import SessionLocal
from app.models.news import NewsArticle
from app.services.ingestion import RSSIngestor


async def main() -> None:
    ingestor = RSSIngestor(NEWS_FEED_SOURCES)
    await ingestor.run()

    async with SessionLocal() as session:
        total_articles = await session.scalar(select(func.count()).select_from(NewsArticle))
        latest_article_result = await session.execute(
            select(NewsArticle).order_by(NewsArticle.published_at.desc()).limit(1)
        )
        latest_article = latest_article_result.scalars().first()

    if total_articles is None:
        total_articles = 0

    if latest_article:
        published_at = latest_article.published_at.astimezone() if latest_article.published_at else None
        timestamp = (
            published_at.strftime("%Y-%m-%d %H:%M:%S %Z")
            if isinstance(published_at, datetime)
            else str(latest_article.published_at)
        )
        print(f"Ingestion complete - {total_articles} articles stored - Latest: {latest_article.title} @ {timestamp}")
    else:
        print("Ingestion complete - No articles found (check feed configuration).")


if __name__ == "__main__":
    asyncio.run(main())
