# Configuration & Environment Reference

Use this guide to configure Infera across local, staging, and production environments. Variables prefixed with `AI_HELPER_` apply to the FastAPI backend unless stated otherwise.

---

## Quick Reference Tables

### Backend (FastAPI)

| Variable | Type | Default | Description |
| --- | --- | --- | --- |
| `AI_HELPER_ENVIRONMENT` | string | `development` | Arbitrary environment label surfaced in logs/metrics |
| `AI_HELPER_DATABASE_URL` | URL | **required** | Postgres DSN (async dialect) – e.g. `postgresql+asyncpg://user:pass@host:5432/db` |
| `AI_HELPER_REDIS_URL` | URL | `redis://localhost:6379/0` | Optional Redis cache / job queue endpoint |
| `AI_HELPER_INGESTION_ENABLED` | bool | `true` | Toggle automated RSS ingestion |
| `AI_HELPER_INGESTION_INTERVAL_MINUTES` | int | `30` | Poll cadence for the ingestion scheduler |
| `AI_HELPER_LOG_LEVEL` | string | `INFO` | Log level (`DEBUG`, `INFO`, `WARNING`, `ERROR`, `CRITICAL`) |
| `AI_HELPER_METRICS_ENABLED` | bool | `true` | Enables Prometheus middleware + `/metrics` route |
| `AI_HELPER_MEILISEARCH_URL` | URL | `null` | Optional Meilisearch endpoint for search |
| `AI_HELPER_MEILISEARCH_API_KEY` | string | `null` | Optional Meilisearch admin key |
| `AI_HELPER_JWT_SECRET_KEY` | secret | **required** | HMAC secret for JWT signing (48+ char). Auto-generated if absent, but set explicitly in production |
| `AI_HELPER_JWT_ALGORITHM` | string | `HS256` | Signing algorithm |
| `AI_HELPER_JWT_EXPIRE_MINUTES` | int | `60` | Token lifetime |
| `AI_HELPER_CORS_ORIGINS` | CSV | `http://localhost:3000` | Allowed origins for browser clients (comma-separated) |

### Frontend (Next.js)

| Variable | Scope | Description |
| --- | --- | --- |
| `NEXT_PUBLIC_API_URL` | Client + SSR | API base URL accessible from the browser. Required in production. |
| `AI_HELPER_API_URL` | SSR only | Server-side override (useful if SSR runs in a different network context). |
| `API_BASE_URL` | SSR fallback | Legacy fallback consumed by some utilities (`search/page.tsx`). |

Ensure front-end and back-end agree on the API origin, and mirror the value in `AI_HELPER_CORS_ORIGINS`.

---

## Environment Templates

- `apps/api/.env.example` – backend defaults (create `.env` from it).
- `apps/web/.env.local.example` – frontend defaults (create `.env.local` from it).

### Example Backend `.env`

```ini
AI_HELPER_ENVIRONMENT=development
AI_HELPER_DATABASE_URL=postgresql+asyncpg://ai_helper:devpass@localhost:5432/ai_helper
AI_HELPER_INGESTION_ENABLED=true
AI_HELPER_INGESTION_INTERVAL_MINUTES=30
AI_HELPER_JWT_SECRET_KEY=replace-this-with-a-long-random-string
AI_HELPER_CORS_ORIGINS=http://localhost:3000
AI_HELPER_LOG_LEVEL=INFO
AI_HELPER_METRICS_ENABLED=true
```

### Example Frontend `.env.local`

```ini
NEXT_PUBLIC_API_URL=http://localhost:8000
AI_HELPER_API_URL=http://localhost:8000
```

---

## Secret Management Recommendations

- **Development**: `.env` and `.env.local` (git-ignored), optionally managed via direnv.
- **CI / Deployment**: GitHub Actions secrets + environment variables. Inject via workflow or hosting provider dashboard.
- **Rotation**: For JWT secrets and database credentials, rotate quarterly or immediately after a suspected breach. Update running instances and redeploy.

---

## Configuration Gotchas

1. **Missing JWT Secret** – The backend will generate a secret at runtime, but tokens issued before restarts will become invalid. Always set `AI_HELPER_JWT_SECRET_KEY` in persistent environments.
2. **CORS Blocking** – Ensure `AI_HELPER_CORS_ORIGINS` includes the exact scheme + host + port of the frontend (e.g. `https://app.infera.com`).
3. **Search Fallback** – If Meilisearch variables are unset, search routes fall back to SQL + in-memory scoring. Set both URL and API key to enable Meilisearch.
4. **SSR vs Browser** – The frontend enforces `NEXT_PUBLIC_API_URL` at runtime; lack of this variable will throw an error client-side. SSR can use `AI_HELPER_API_URL`, but always configure the public value in production.
5. **Scheduler in Staging** – If staging should not auto-ingest (to avoid duplicate data), set `AI_HELPER_INGESTION_ENABLED=false` and manually trigger ingestion as needed.

---

## Helpful Commands

```bash
# Generate a 64-byte JWT secret
python -c "import secrets; print(secrets.token_urlsafe(64))"

# Run backend with explicit env overrides
AI_HELPER_LOG_LEVEL=DEBUG AI_HELPER_METRICS_ENABLED=false npm run dev:api
```

Keep this document synchronized with code updates—especially whenever new environment variables are introduced or defaults change. 
