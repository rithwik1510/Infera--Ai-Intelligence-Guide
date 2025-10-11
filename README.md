# Infera · AI Intelligence Almanac

[![lint-web](https://github.com/your-org/infera/actions/workflows/lint-web.yml/badge.svg)](https://github.com/your-org/infera/actions/workflows/lint-web.yml)
[![test-api](https://github.com/your-org/infera/actions/workflows/test-api.yml/badge.svg)](https://github.com/your-org/infera/actions/workflows/test-api.yml)
[![build-web](https://github.com/your-org/infera/actions/workflows/build-web.yml/badge.svg)](https://github.com/your-org/infera/actions/workflows/build-web.yml)

> Editorial-grade intelligence hub that blends news, benchmarking, guided learning, and a living model directory into one experience.

Infera (codename *AI Helper*) is a dual-app monorepo that delivers a magazine-quality AI portal. It pairs a cinematic Next.js front-end with a FastAPI backend that continuously ingests verified AI lab updates, curates learning tracks, and surfaces production-ready model intelligence. The guiding product requirements live in [`Agents.md.docx`](Agents.md.docx) and the day-by-day implementation notes are captured in [`progress.log`](progress.log).

<p align="center">
  <img src="docs/assets/hero-home.png" alt="Infera landing hero" width="960" />
</p>

---

## ✨ Feature Pillars

- **Newswire Digest** – Automated RSS pipeline that ranks launches by recency, provenance weight, and GitHub momentum, rendering into a gradient-driven editorial grid plus a weekly “Top 10” digest.
  <p><img src="docs/assets/news-digest.png" alt="Newswire digest view" width="960" /></p>
- **Comparative Lab** – Multi-model benchmarking (MMLU, GSM8K, HumanEval, HellaSwag) with radar + bar charts, analyst copy, pricing estimators, and sourcing rails for production LLMs.
  <p><img src="docs/assets/comparisons-lab.png" alt="Comparisons lab with radar chart" width="960" /></p>
- **Learning Studio** – Curated, badgeable tracks that mix articles, videos, documentation, and hands-on tasks across seven domains (prompt craft → agent ops).
  <p><img src="docs/assets/learn-track.png" alt="Learning track detail page" width="960" /></p>
- **Model Directory** – Filterable directory covering availability, licensing, context windows, and verified sourcing links for the modern LLM landscape.
  <p><img src="docs/assets/model-directory.png" alt="Model directory filters and cards" width="960" /></p>
- **Search Everywhere** – Shared search index (Meilisearch-ready, local fallback) that aggregates news, comparisons, learn tracks, and models into a single discovery surface.

---

## 🏗️ Architecture Overview

```text
.
├── apps/
│   ├── api/      # FastAPI service, SQLAlchemy models, ingestion workers, metrics
│   └── web/      # Next.js App Router frontend with Tailwind v4 + Framer Motion
├── packages/
│   └── types/    # Shared Zod contracts consumed by both apps
├── docs/         # Product vision, operating handbook, deployment playbooks
├── progress.log  # Running implementation diary
└── Agents.md.docx# Canonical product requirements
```

<details>
<summary><strong>Monorepo topology (high level)</strong></summary>

```mermaid
flowchart LR
  subgraph Frontend [Next.js App]
    Shell[SiteShell]
    NewsPage[News /news]
    ComparisonsPage[Comparisons /comparisons]
    LearnPage[Learn /learn]
    ModelsPage[Models /models]
    SearchPage[Search /search]
  end

  subgraph Shared
    Types[@ai-helper/types]
    DesignTokens[design/tokens]
  end

  subgraph Backend [FastAPI Service]
    Routers[News · Comparisons · Learn · Search · Auth · Metrics]
    Services[NewsService · CatalogService · SearchService]
    DB[(Postgres)]
    Scheduler[Async RSS Scheduler]
  end

  RSS[(Curated RSS feeds)]
  GitHub[(GitHub Stars)]
  Meili[(Meilisearch)]

  RSS --> Scheduler --> Services --> DB
  Services --> Routers --> Frontend
  Types --> Frontend
  Types --> Backend
  Frontend --> Meili
```
</details>

---

## ⚙️ Data & Automation Flow

1. **Ingestion** – `RSSIngestor` polls curated lab feeds every 30 minutes (configurable), normalises entries, enriches GitHub metadata, assigns weighted scores, and persists to Postgres.
2. **Editorial Digest** – A weekly digest recomputes the “Top 10” each run using score + recency heuristics and publishes alongside the feed.
3. **API Surface** – FastAPI routers expose `/news`, `/comparisons`, `/learn`, `/search`, `/metrics`, plus auth endpoints that back the front-end.
4. **Experience Layer** – Next.js leverages static Zod contracts (`@ai-helper/types`) with SSG + runtime data fetching and a Live News fallback (direct RSS pull) for resilience.
5. **Search** – Requests first attempt Meilisearch (if configured) and gracefully fall back to in-memory scoring shared with the server implementation.

---

## 🚀 Quick Start

### 1. Prerequisites

- Node.js ≥ 20
- pnpm or npm (workspace aware)
- Python ≥ 3.11
- PostgreSQL (local or managed instance)
- Redis (optional, for background jobs)

### 2. Clone & Install

```bash
git clone https://github.com/your-org/infera.git
cd infera
npm install
python -m venv .venv && .\.venv\Scripts\activate  # Windows example
pip install -r apps/api/requirements.txt          # or `pip install -e ./apps/api`
```

### 3. Configure Environment

Copy the sample env templates into place and tune values:

```bash
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.local.example apps/web/.env.local
```

Key variables (see [docs/configuration.md](docs/configuration.md) for the full matrix):

| Variable | App | Description |
| --- | --- | --- |
| `AI_HELPER_DATABASE_URL` | API | Postgres DSN (e.g. `postgresql+asyncpg://user:pass@host/db`) |
| `AI_HELPER_JWT_SECRET_KEY` | API | 48+ char secret for auth tokens |
| `AI_HELPER_CORS_ORIGINS` | API | CSV list of allowed front-end origins |
| `AI_HELPER_INGESTION_INTERVAL_MINUTES` | API | RSS poll cadence (default `30`) |
| `NEXT_PUBLIC_API_URL` | Web | Browser-accessible API origin (e.g. `https://api.infera.app`) |
| `AI_HELPER_API_URL` | Web/SSR | Server-side API origin (if different) |

### 4. Run the Stack

```bash
# Terminal A – FastAPI with auto-reload
npm run dev:api

# Terminal B – Next.js frontend with Turbopack
npm run dev:web

# Or run both (requires `concurrently`)
npm run dev:all
```

Visit `http://localhost:3000` (web) and `http://localhost:8000/docs` (API docs).

---

## 🧪 Quality Bar

| Task | Command |
| --- | --- |
| Frontend lint | `npm run lint:web` |
| Backend tests | `cd apps/api && pytest` |
| Type checks | `npm run lint:web` (includes TS) |
| Format (API) | `ruff check --fix` (if configured) |

Continuous Integration recipes are outlined in [docs/ci.md](docs/ci.md) to help you mirror OpenAI/Google-grade pipelines.

---

## 📁 Repository Tour

```
apps/
├── api/
│   ├── app/               # FastAPI application package
│   │   ├── core/          # Config, logging, auth, metrics
│   │   ├── data/          # Seed datasets
│   │   ├── db/            # SQLAlchemy base + migrations bootstrap
│   │   ├── models/        # ORM models
│   │   ├── routers/       # FastAPI routers (news/comparisons/learn/search/auth)
│   │   └── services/      # Domain services (ingestion, search, catalog...)
│   ├── scripts/           # CLI helpers (reindex, seed, etc.)
│   └── tests/             # Pytest API contract suite
├── web/
│   ├── src/app/           # App Router pages & layouts
│   ├── src/components/    # Design system and feature components
│   ├── src/lib/           # API client, analytics, search utilities
│   └── src/data/          # Static fallback datasets
└── packages/types/        # Shared Zod schemas + types
```

---

## 📚 Documentation Suite

- [`docs/product-vision.md`](docs/product-vision.md) – Condensed take on the master spec (`Agents.md.docx`).
- [`docs/operating-handbook.md`](docs/operating-handbook.md) – How to run ingestion, manage sources, and curate content.
- [`docs/configuration.md`](docs/configuration.md) – Environment variables, secrets management, deployment tips.
- [`docs/deployment.md`](docs/deployment.md) – Recommended GitHub Actions + infrastructure blueprint for Vercel + Fly.io/Render.
- [`docs/ci.md`](docs/ci.md) – Ready-to-use workflow configs.
- [`progress.log`](progress.log) – Ground-truth changelog maintained throughout development.

---

## 🛣️ Roadmap (from the master spec)

### Phase 1 · MVP (DONE)
- News digest grid, weekly digest automation
- LLM comparisons lab with canonical benchmarks
- Learning Studio with curated track trio
- Core model directory with filters and badges

### Phase 2 · Growth
- Additional benchmarks (MT-Bench, BBH), more providers (Meta, Mistral)
- GitHub & arXiv enrichment, scraper hardening
- “Playground” tab (prompt tester spanning OpenAI + Ollama + open weights)

### Phase 3 · Advanced
- AI-authored release summaries, SDK diffs, and trend notebooks
- Live prompt tests embedded in comparison views
- Personalised feeds, community track submissions, badge verification

See [`Agents.md.docx`](Agents.md.docx) §8 for the canonical breakdown.

---

## 🤝 Contribute & Ship

1. Fork + branch: `git checkout -b feature/amazing-enhancement`
2. Follow the Dev Guardrails:
   - ✅ Run `npm run lint:web` and `pytest`
   - ✅ Update documentation & fixtures
   - ✅ Record significant moves in [`progress.log`](progress.log)
3. Submit a PR with screenshots/GIFs for front-end changes.

To publish on GitHub:
```bash
git remote add origin https://github.com/<your-org>/infera.git
git push -u origin main
```
See [docs/deployment.md](docs/deployment.md) for GitHub Pages + Actions polish (badges, shields, preview URLs) and [CONTRIBUTING.md](CONTRIBUTING.md) for workflow details.

---

## 🧭 Governance Notes

- Treat `Agents.md.docx` as the product constitution. When scope changes, update both the doc and `docs/product-vision.md`.
- Use Codex (this assistant) as your “second engineer” for scaffolding, refactors, and ingestion tweaks—especially when feeds change.
- Audit curated resources quarterly (news sources, learn links) and rotate or annotate stale entries.

---

## 📣 Credits

Created by the AI Helper collective with a future-facing focus on editorial storytelling and trustworthy AI intelligence. Contributions and enhancements welcome—please open an issue or discussion to get involved.

---

> “Designed like a magazine, engineered like a platform.” – Product Vision, §10
