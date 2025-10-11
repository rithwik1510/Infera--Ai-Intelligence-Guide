"""API contract tests for database-backed endpoints."""
from __future__ import annotations

import asyncio
import os
from pathlib import Path

from fastapi.testclient import TestClient
import pytest
from sqlalchemy import select

TEST_DB_PATH = Path("./test_api.db")
db_url = "sqlite+aiosqlite:///" + str(TEST_DB_PATH.resolve()).replace("\\", "/")
os.environ.setdefault("AI_HELPER_DATABASE_URL", db_url)
os.environ.setdefault("AI_HELPER_JWT_SECRET_KEY", "test-secret-key")
if TEST_DB_PATH.exists():
    TEST_DB_PATH.unlink()

from app.main import create_app  # noqa: E402
from app.db.database import SessionLocal  # noqa: E402
from app.models.news import NewsArticle  # noqa: E402
from app.services.ingestion import RSSIngestor  # noqa: E402
from app.workers.scheduler import IngestionScheduler  # noqa: E402


@pytest.fixture(scope="session")
def api_client() -> TestClient:
    try:
        with TestClient(create_app()) as client:
            yield client
    finally:
        if TEST_DB_PATH.exists():
            for _ in range(5):
                try:
                    TEST_DB_PATH.unlink()
                    break
                except PermissionError:
                    import time

                    time.sleep(0.1)


@pytest.fixture
def anyio_backend():
    return "asyncio"


def test_news_payload_contract(api_client: TestClient) -> None:
    response = api_client.get("/news")
    assert response.status_code == 200

    payload = response.json()
    assert payload["sources"] and len(payload["sources"]) >= 6
    assert payload["articles"] and len(payload["articles"]) >= 10
    assert payload["digest"]

    first_article = payload["articles"][0]
    assert set(first_article) >= {
        "id",
        "title",
        "slug",
        "sourceId",
        "url",
        "summary",
        "tags",
        "publishedAt",
        "score",
        "content",
    }

    article_with_repo = next((item for item in payload["articles"] if item.get("githubRepo")), None)
    assert article_with_repo is not None
    assert article_with_repo["githubRepo"]["stars"] >= 0

    digest_ids = set(payload["digest"]["articleIds"])
    article_ids = {article["id"] for article in payload["articles"]}
    assert digest_ids and digest_ids.issubset(article_ids)


def test_news_article_detail_contract(api_client: TestClient) -> None:
    overview = api_client.get("/news")
    assert overview.status_code == 200
    first_slug = overview.json()["articles"][0]["slug"]

    response = api_client.get(f"/news/{first_slug}")
    assert response.status_code == 200

    detail = response.json()
    assert "article" in detail and "related" in detail
    assert detail["article"]["slug"] == first_slug
    assert isinstance(detail["related"], list)
    if detail["related"]:
        assert all("slug" in article for article in detail["related"])
    if detail.get("source"):
        assert {"id", "name", "gradient"}.issubset(detail["source"])


def test_comparisons_config_contract(api_client: TestClient) -> None:
    response = api_client.get("/comparisons/config")
    assert response.status_code == 200

    data = response.json()
    assert data["defaultModelIds"] == [
        "gpt-5",
        "claude-4-2-sonnet",
        "gemini-2-5-pro",
        "grok-4",
    ]
    assert len(data["benchmarks"]) == 5
    assert all("higherIsBetter" in benchmark for benchmark in data["benchmarks"])


def test_comparisons_models_contract(api_client: TestClient) -> None:
    response = api_client.get("/comparisons/models")
    assert response.status_code == 200

    models = response.json()
    assert len(models) >= 10
    gpt5 = next(model for model in models if model["id"] == "gpt-5")
    assert gpt5["contextWindow"] == 1000000
    assert gpt5["context"]["modalities"] == ["text", "image", "audio", "video", "tools"]
    assert all("normalizedScore" in score for score in gpt5["benchmarks"])


def test_learn_tracks_contract(api_client: TestClient) -> None:
    response = api_client.get("/learn/tracks")
    assert response.status_code == 200

    tracks = response.json()
    assert len(tracks) == 7
    prompt_track = next(track for track in tracks if track["id"] == "prompt-foundations")
    assert prompt_track["timeEstimateHours"] == 5
    assert prompt_track["modules"], "expected modules"
    assert prompt_track["modules"][0]["resources"], "expected resources"


def test_rss_ingestor_creates_articles(api_client: TestClient) -> None:
    sources = [
        {
            "id": "example",
            "name": "Example Feed",
            "url": "https://example.com",
            "feed_url": "https://example.com/rss",
            "gradient": ("#123456", "#654321"),
        }
    ]

    async def fake_fetch(_: dict[str, str]):
        entry = type("Entry", (), {})()
        entry.title = "Example Model Launch"
        entry.link = "https://example.com/articles/example-model-launch"
        entry.summary = "Example launches a new foundation model with safety upgrades."
        entry.id = "example-model-launch"
        entry.published = "2025-09-30T10:00:00Z"
        entry.tags = [type("Tag", (), {"term": "launch"})()]
        entry.links = [{"href": "https://example.com/articles/example-model-launch"}]
        feed = type("Feed", (), {})()
        feed.entries = [entry]
        return feed

    async def run_ingestion() -> None:
        ingestor = RSSIngestor(sources, fetcher=fake_fetch)
        await ingestor.run()

    asyncio.run(run_ingestion())

    async def fetch_article() -> NewsArticle | None:
        async with SessionLocal() as session:
            result = await session.execute(select(NewsArticle).where(NewsArticle.id == "example:example-model-launch"))
            return result.scalar_one_or_none()

    article = asyncio.run(fetch_article())
    assert article is not None
    assert article.title == "Example Model Launch"
    assert article.source_id == "example"
    assert "launch" in article.tags

    response = api_client.get("/news")
    assert response.status_code == 200
    data = response.json()
    assert any(item["id"] == "example:example-model-launch" for item in data["articles"])
    assert "example:example-model-launch" in set(data["digest"]["articleIds"])


def test_search_endpoint_returns_groups(api_client: TestClient) -> None:
    response = api_client.get("/search", params={"q": "assistants"})
    assert response.status_code == 200
    data = response.json()
    assert data["query"] == "assistants"
    assert data["total"] >= 1
    categories = {group["category"] for group in data["groups"]}
    assert {"news", "comparisons", "learn", "models"} == categories


def test_metrics_endpoint(api_client: TestClient) -> None:
    response = api_client.get("/metrics")
    assert response.status_code == 200
    assert "ai_helper_requests_total" in response.text


@pytest.mark.anyio("asyncio")
async def test_scheduler_runs() -> None:
    counter = {"count": 0}

    async def runner() -> None:
        counter["count"] += 1

    scheduler = IngestionScheduler(interval_seconds=0.01, runner=runner)
    scheduler.start()
    await asyncio.sleep(0.05)
    await scheduler.stop()

    assert counter["count"] >= 1



