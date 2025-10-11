"""News domain services."""
from __future__ import annotations

from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession
from sqlalchemy.orm import selectinload

from app.models.news import NewsArticle, NewsSource, WeeklyDigest
from app.schemas.news import (
    GithubRepoRead,
    NewsArticleDetail,
    NewsArticleRead,
    NewsPayload,
    NewsSourceRead,
    WeeklyDigestRead,
)


def _serialize_article(article: NewsArticle) -> NewsArticleRead:
    github = None
    if article.github_repo_full_name:
        github = GithubRepoRead(
            full_name=article.github_repo_full_name,
            stars=article.github_stars or 0,
            delta_stars=article.github_delta_stars or 0,
        )
    return NewsArticleRead(
        id=article.id,
        title=article.title,
        slug=article.slug,
        source_id=article.source_id,
        url=article.url,
        summary=article.summary,
        tags=article.tags or [],
        published_at=article.published_at,
        score=article.ranking_score,
        github_repo=github,
        hero_image=article.hero_image,
        content=article.content or [],
    )


async def fetch_news_payload(session: AsyncSession) -> NewsPayload:
    """Return editorial news payload sourced from the database."""
    sources_result = await session.execute(select(NewsSource).order_by(NewsSource.weight.desc()))
    sources = [
        NewsSourceRead(
            id=source.id,
            name=source.name,
            url=source.url,
            gradient=(source.gradient_start, source.gradient_end),
            weight=source.weight,
        )
        for source in sources_result.scalars().all()
    ]

    articles_result = await session.execute(
        select(NewsArticle)
        .order_by(NewsArticle.ranking_score.desc(), NewsArticle.published_at.desc())
        .limit(60)
    )
    articles = [_serialize_article(article) for article in articles_result.scalars().all()]

    digest_result = await session.execute(select(WeeklyDigest).order_by(WeeklyDigest.week_of.desc()))
    digest_row = digest_result.scalars().first()
    digest = (
        WeeklyDigestRead(
            week_of=digest_row.week_of,
            headline=digest_row.headline,
            summary=digest_row.summary,
            article_ids=digest_row.article_ids,
        )
        if digest_row
        else None
    )

    return NewsPayload(sources=sources, articles=articles, digest=digest)


async def fetch_news_article_detail(session: AsyncSession, slug: str) -> NewsArticleDetail | None:
    """Return a single news article with source metadata and related coverage."""
    article_result = await session.execute(
        select(NewsArticle)
        .options(selectinload(NewsArticle.source))
        .where(NewsArticle.slug == slug)
    )
    article_row = article_result.scalars().first()
    if not article_row:
        return None

    article = _serialize_article(article_row)
    source = (
        NewsSourceRead(
            id=article_row.source.id,
            name=article_row.source.name,
            url=article_row.source.url,
            gradient=(article_row.source.gradient_start, article_row.source.gradient_end),
            weight=article_row.source.weight,
        )
        if article_row.source
        else None
    )

    related_stmt = (
        select(NewsArticle)
        .where(NewsArticle.id != article_row.id)
        .order_by(
            (NewsArticle.source_id == article_row.source_id).desc(),
            NewsArticle.ranking_score.desc(),
            NewsArticle.published_at.desc(),
        )
        .limit(6)
    )
    related_result = await session.execute(related_stmt)
    related = [_serialize_article(row) for row in related_result.scalars().all()]

    return NewsArticleDetail(article=article, source=source, related=related)
