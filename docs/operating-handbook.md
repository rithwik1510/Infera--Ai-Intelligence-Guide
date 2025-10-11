# Operating Handbook · Infera Platform

This guide explains how to operate, curate, and extend the Infera stack day-to-day. It complements the product vision (`docs/product-vision.md`) by focusing on process and ownership.

---

## 1. Environments

| Layer | Local | Staging | Production |
| --- | --- | --- | --- |
| Frontend | `npm run dev:web` | Vercel preview | Vercel production |
| API | `npm run dev:api` (uvicorn reload) | Fly.io / Render staging instance | Fly.io / Render production instance |
| Database | Local Postgres (Docker or Supabase) | Managed Postgres (Supabase) | Managed Postgres (Supabase/AWS RDS) |
| Search | In-memory fallback, optional Meilisearch Docker | Hosted Meilisearch playground | Managed Meilisearch cluster |
| Telemetry | local Prometheus scraping | OTEL collector + Grafana Cloud | OTEL collector + Grafana Cloud |

Keep staging environments data-aligned with production by replaying daily ingestion and refreshing curated datasets once per sprint.

---

## 2. Ingestion & Newsroom Ops

### Automated RSS Pipeline

1. Configure `AI_HELPER_INGESTION_ENABLED=true` and set `AI_HELPER_INGESTION_INTERVAL_MINUTES` (default `30`).
2. The `IngestionScheduler` launches alongside the FastAPI lifespan and executes `RSSIngestor.run()`.
3. Pipeline steps:
   - Fetch configured feeds (`app/data/news_feeds.py`)
   - Normalise entries → dedupe by `source_id:url`
   - Enrich GitHub repository references (stars, delta placeholder)
   - Score: `recency decay + source weight + GitHub bonus`
   - Persist articles, update digest, prune stale records beyond retention window

### Manual Interventions

- **Add/Remove Feeds**: Update `NEWS_FEED_SOURCES`, commit with context, re-run ingestion.
- **Investigate Failures**: Check structured logs (`INFO|ERROR`) and Prometheus metrics (`/metrics`). For recurring issues, capture sample payloads and create a diagnostic note in `progress.log`.
- **Weekly Digest Review**: Digest is auto-generated. On Mondays review headline/summary for tone; adjust copy if necessary via admin script (coming soon) or direct DB edit.

### Live News Fallback (Frontend)

If the API is unavailable, the frontend can attempt a direct RSS pull (`/api/news/live`). Keep the feed definitions (`src/lib/live-news.ts`) in sync with the backend list. Errors degrade gracefully to the static seed data.

---

## 3. Curated Content Governance

### Learn Tracks

- Source file: `apps/web/src/data/learn-tracks.ts` (mirrored in API seeds).
- Review cadence: **quarterly**. Validate each link, rotate outdated content, and document changes in `progress.log`.
- Quality checklist:
  - ≥ 3 modules per track
  - Each module includes at least one hands-on task
  - Capstone with clear deliverable
  - Badge metadata present

### Comparisons & Model Directory

- Source file: `apps/web/src/data/comparison-config.ts`, `apps/web/src/data/models.ts`, mirrored into API seeds.
- Validate pricing and availability against official releases before publishing.
- Include citation URLs for every model (used to render provenance badges).
- Update benchmark scores only when credible sources (Papers With Code, vendor benchmarks, academic evaluations) are available.

### Documentation Hygiene

- Align significant changes with updates to `docs/product-vision.md` and this handbook.
- Record each release or notable data refresh in `progress.log` with timestamps.

---

## 4. Search Infrastructure

- Default flow: Meilisearch if `AI_HELPER_MEILISEARCH_URL` is set; otherwise falls back to SQL + in-memory scoring.
- Populate Meilisearch via `apps/api/scripts/reindex_search.py` (coming soon – placeholder). For now, a manual `POST` to Meili with data from the API responses can seed indexes.
- Keep index names in sync with constants (`MEILI_INDEXES`) in both backend and frontend.

---

## 5. Observability

- **Logging**: Structured logging (`%(asctime)s | %(levelname)s | %(name)s | %(message)s`) with log level controlled by `AI_HELPER_LOG_LEVEL`.
- **Metrics**: Prometheus counters/histograms for requests. Scrape `/metrics` (enabled by `AI_HELPER_METRICS_ENABLED=true`). Suggested Grafana dashboards: latency heatmap, ingestion success rate, digest freshness.
- **Alerts**: Configure alert rules for:
  - Digest older than 48 hours
  - Ingestion failure rate > 10% over 30 minutes
  - API latency p95 > 2s

---

## 6. Release Playbook

1. Smoke test locally (`npm run dev:all`). Validate news refresh, comparisons charts, learn track routing, model filters, search.
2. Run quality checks: `npm run lint:web`, `pytest`.
3. Update `progress.log` with summary + date.
4. Prepare release notes summarising user-facing changes. Include screenshots/GIFs for UI updates.
5. Tag release (`git tag vYYYY.MM.DD`) and push to GitHub. Attach release notes.
6. Deploy API (Fly.io/Render) followed by frontend (Vercel). Ensure environment variable parity.
7. Verify production ingestion and metrics dashboards.

---

## 7. Support & On-call Hints

- **News feed broken** → Check RSS URL manually, inspect HTML for structural changes, adjust normaliser if necessary.
- **Charts empty** → Ensure benchmark data exists in both seeds and database; check for schema mismatches after migrations.
- **Auth issues** → Confirm `AI_HELPER_JWT_SECRET_KEY` matches across environments; inspect token expiry settings.
- **Search errors** → Validate Meilisearch availability; if down, the fallback should still serve results—investigate logs if not.
- **Frontend fetch failures** → Confirm `NEXT_PUBLIC_API_URL` and `AI_HELPER_API_URL` are set and included in CORS origins on API.

Keep a rolling “Ops Notes” section in `progress.log` when handling incidents—they inform future automation priorities. 
