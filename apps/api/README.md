# AI Helper API

FastAPI backend powering the AI Helper platform. The service will ingest news feeds, expose comparison data, serve curated learning content, and maintain the model directory.

## Quick Start

```bash
# create and activate a virtual environment (example using uv)
uv venv
uv pip install -e .[dev]
uvicorn app.main:app --reload
# ingest the latest feeds once (optional, the background worker will also run on startup)
python scripts/ingest_news.py
```

## Project Structure

```
app/
  main.py            # FastAPI application factory + lifespan orchestration
  core/              # config, logging, dependencies, security
  db/                # engine, sessions, migrations bootstrap
  models/            # SQLAlchemy models (news, comparisons, learn)
  services/
    ingestion.py     # RSS ingestion + scoring + weekly digest refresh
    news.py          # news payload serializers
    search.py        # full-platform search (DB + Meilisearch fallback)
  workers/
    scheduler.py     # background scheduler for ingestion
    rss.py           # ingestion worker entrypoint
scripts/
  ingest_news.py     # manual trigger for an ingestion cycle
```

## Database & Migrations

The service uses Alembic for schema management. Migrations run automatically on app startup, but you can invoke them manually:

```bash
# upgrade to latest schema
alembic -c apps/api/alembic.ini upgrade head

# create a new revision after modifying SQLAlchemy models
alembic -c apps/api/alembic.ini revision --autogenerate -m "describe change"
```

Seed data for news, comparisons, and learn tracks is applied after migrations during startup to keep API payloads consistent with the frontend contracts.

## Tests

Run the contract suite against a temporary sqlite+aiosqlite database:

```bash
cd apps/api
python -m pytest
```

For a one-liner that applies migrations and executes tests, use:

```bash
cd apps/api
./scripts/check.sh
```

To mirror production locally with Postgres, use the provided Docker compose file:

```bash
cd apps/api
docker compose up -d postgres
AI_HELPER_DATABASE_URL=postgresql+asyncpg://ai_helper:ai_helper@localhost:5432/ai_helper ./scripts/test-postgres.sh
```

## Endpoints

- `GET /health` - service health check.
- `GET /news` - latest news digest.
- `GET /comparisons/config` and `/comparisons/models` - benchmarking data.
- `GET /learn/tracks` - curated learning tracks.
- `GET /search` - full-platform search across news, comparisons, learn, and models.

## Meilisearch

To enable Meilisearch-backed search, supply `AI_HELPER_MEILISEARCH_URL` (and optionally `AI_HELPER_MEILISEARCH_API_KEY`). After running migrations and ingesting data, sync the indexes:

```bash
cd apps/api
AI_HELPER_MEILISEARCH_URL=http://localhost:7700 AI_HELPER_MEILISEARCH_API_KEY=masterKey ./scripts/sync-search.sh
```

The `/search` endpoint automatically falls back to the built-in scorer when Meilisearch is unavailable.

## Ingestion

The RSS worker runs automatically on startup, pulling the sources defined in `app/data/news_feeds.py`, normalizing entries, ranking them with recency/source weighting, and refreshing the weekly digest. Control it with:

- `AI_HELPER_INGESTION_ENABLED=false` to disable the background scheduler.
- `AI_HELPER_INGESTION_INTERVAL_MINUTES=15` (or any number) to tweak cadence.

You can trigger a manual cycle at any time:

```bash
cd apps/api
python scripts/ingest_news.py
```

After an ingestion pass, run `./scripts/sync-search.sh` if you need to sync Meilisearch.

## Observability

- Structured logging controlled by `AI_HELPER_LOG_LEVEL` (default INFO).
- Prometheus metrics available at `/metrics` (set `AI_HELPER_METRICS_ENABLED=false` to disable).
