"""News endpoints aligned with ingestion pipeline."""
from __future__ import annotations

from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.database import get_session
from app.schemas.news import NewsArticleDetail, NewsPayload
from app.services.news import fetch_news_article_detail, fetch_news_payload

router = APIRouter(prefix="/news", tags=["news"])


@router.get("", response_model=NewsPayload, summary="List news articles and digest")
async def list_news(session: AsyncSession = Depends(get_session)) -> NewsPayload:  # noqa: ARG001
    """Return the latest news payload sourced from the ingestion layer."""
    return await fetch_news_payload(session)


@router.get("/{slug}", response_model=NewsArticleDetail, summary="Fetch a single news article with related stories")
async def read_news_article(slug: str, session: AsyncSession = Depends(get_session)) -> NewsArticleDetail:  # noqa: ARG001
    detail = await fetch_news_article_detail(session, slug)
    if not detail:
        raise HTTPException(status_code=404, detail="Article not found")
    return detail
