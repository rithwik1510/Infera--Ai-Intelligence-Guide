# Deployment Playbook

This document outlines how to promote Infera from local development to a production-grade presence on GitHub, Vercel (frontend), and Fly.io/Render (backend). Tailor the infrastructure to your organisation, but keep these stages in mind.

---

## 1. Git & Release Hygiene

1. Ensure `README.md`, `docs/*`, and `progress.log` are up to date.
2. Run quality gates: `npm run lint:web`, `cd apps/api && pytest`.
3. Commit with a clear summary, push to GitHub, and open a PR.
4. Tag release versions following `vYYYY.MM.DD` or semver.
5. Publish GitHub Releases with highlights, screenshots, and deployment links.

### Suggested GitHub Repo Setup

- Default branch: `main`
- Protected branch rules: require PR review, status checks (lint + tests) passing, linear history
- Issue templates: “Feature Request”, “Bug Report”, “Content Update”
- Discussion categories: “Roadmap”, “Data governance”, “Design”

---

## 2. Continuous Integration (GitHub Actions)

See [`docs/ci.md`](docs/ci.md) for workflow yaml snippets. Key jobs:

- **lint-web** – Node 20, `npm ci`, `npm run lint:web`
- **test-api** – Python 3.12, `pip install -e ./apps/api`, `pytest`
- **build-web** – `npm run build:web` (ensures Next.js compiles)
- **docker-api** (optional) – build/push API Docker image to registry

Use caching (`actions/setup-node`, `actions/setup-python`) and matrix builds as needed.

---

## 3. Hosting Blueprint

### Frontend (Vercel)

- Import GitHub repo, select `apps/web` as root.
- Build command: `npm run build:web`
- Output directory: `.next`
- Env vars: `NEXT_PUBLIC_API_URL=https://api.infera.app`
- Preview deployments available per PR.

### API (Fly.io or Render)

- Containerise using `uvicorn` (ASGI). Example command: `uvicorn app.main:app --host 0.0.0.0 --port 8000`.
- Provision Postgres add-on (Supabase, Neon, RDS) and set `AI_HELPER_DATABASE_URL`.
- Define secrets: `AI_HELPER_JWT_SECRET_KEY`, `AI_HELPER_CORS_ORIGINS=https://infera.app`, ingestion toggles, etc.
- Configure health check → `/health` route.
- Enable auto-deploy on pushed tags or `main` merges.

### Metrics & Monitoring

- Self-host Prometheus or use Grafana Cloud’s Prometheus endpoint.
- Scrape `/metrics`; visualise request rate, latency, ingestion freshness.
- Set alerts in Slack/Email via Grafana or the hosting provider.

---

## 4. Domain & SSL

- Point apex/domain to Vercel (frontend) using CNAME/ANAME records.
- API: configure subdomain (`api.infera.app`) pointing to Fly.io/Render load balancer.
- Ensure TLS certificates are provisioned automatically (both Vercel and Fly.io handle this out of the box).

---

## 5. Data Migration & Seeding

- Use Alembic migrations (coming soon) or SQLAlchemy metadata create on first run.
- For initial launch, run `apps/api/app/db/init.py:init_db()` automatically via lifespan (already wired).
- For subsequent updates, prefer schema migrations + seed scripts (`apps/api/scripts` placeholder directory).

---

## 6. Post-deploy Checks

1. Hit `/health` and `/metrics` on the API.
2. Load `https://infera.app` and walk through the tabs.
3. Trigger manual ingestion run (temporary script) to validate news flow.
4. Confirm search responses via UI and direct API calls (`/search?q=assistants`).
5. Review logs and dashboards for anomalies.

---

## 7. Ongoing Maintenance

- Rotate secrets quarterly (JWT, DB credentials).
- Monitor feed health; adjust ingestion sources and heuristics as needed.
- Update curated datasets when notable releases occur (record in `progress.log`).
- Schedule quarterly design/UX audit to ensure alignment with editorial standard.

With these practices, you can deliver “Google/OpenAI-grade” polish on GitHub and beyond. 
