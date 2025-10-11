# Product Vision · Infera (AI Helper)

This document distills the canonical requirements captured in `Agents.md.docx` into a concise reference for contributors, PMs, and stakeholders. Treat it as the “why” and “what” for the platform. The “how” lives in `docs/operating-handbook.md` and the codebase.

---

## Brand North Star

- **Voice & Feel**: Premium editorial magazine meets operational command center – cinematic gradients, generous typography, purposeful motion.
- **Primary Accent**: Electric Blue `#2563EB`; secondary Cyan `#06B6D4`. Rounded-2xl components, soft shadows, gradient hero covers.
- **Modes**: Dark is default (navy/graphite surfaces), light mode available via toggle. Typography: Inter / Geist pairing for contrast.
- **Motion Language**: Framer Motion orchestrated fades, staged entrances (`0.06–0.12s`), hover lift with glow respecting reduced motion preferences.

---

## Core Pillars

1. **Newswire** – Continuous RSS ingestion from top AI labs, digest hero card, source gradients, scored by recency × provenance weight × GitHub delta stars.
2. **Comparative Lab** – Multi-select LLM benchmarking (default models: GPT-5, Claude 4.2, Gemini 2.5 Pro, Grok 4). Radar + grouped bar charts, pricing estimator slider, analyst TL;DR, sourcing rail.
3. **Learning Studio** – Curated tracks (min. 3 modules + capstone, time estimate, badge). Each module blends 2–3 high-trust resources and a hands-on task. Quarterly review cadence.
4. **Model Directory** – 10–12 flagship LLMs with filters (provider, license, deployment). Cards include release date, context window, pricing, tags, and link to verified sources.
5. **Search** – Global search bar with grouped results across news, comparisons, learn, and models. Meilisearch integration-ready with graceful in-memory fallback.

---

## Data Strategy

| Domain | MVP Source | Scale Plan |
| --- | --- | --- |
| News | RSS feeds for OpenAI, Anthropic, DeepMind, xAI, Perplexity, Meta, Mistral, Hugging Face, Microsoft, Stability | Extend to GitHub, arXiv, PapersWithCode scrapers; schedule-based ingestion |
| Comparisons | Hand-seeded JSON from official model cards and launch posts | Integrate benchmark APIs and CITED datasets; expand provider roster |
| Learn | Curated JSON/MDX with handpicked resources | Community submissions with moderation, automated link validation |
| Models | Curated directory with verified pricing sheets | Automated scraping + API ingestion; classification tags |
| Search | Shared TypeScript index, optional Meilisearch client | Promote to hosted Meilisearch cluster with nightly reindex jobs |

---

## Roadmap Snapshots

- **Phase 1 – MVP (4–6 weeks)**: News grid + digest, comparisons lab (4 benchmarks), three learn tracks, base directory, dark theme. ✅
- **Phase 2 – Growth**: Add MT-Bench/BBH, more providers, GitHub/arXiv scrapers, prompt playground tab, expanded analytics.
- **Phase 3 – Advanced**: AI-generated release summaries, live prompt tests, personalised feed, community tracks & badges, SDK diffing.

---

## Quality Guardrails

- **Consistency**: Shared design tokens, typography scale, gradient system, and motion settings across tabs.
- **Trustworthiness**: Verified sources for every statistic. Provenance badges on model cards. Clear separation between editorial copy and raw data.
- **Maintainability**: Solo-friendly automation (cron ingestion, link validation scripts). Codex agent assists with boilerplate or refactors when feeds change.
- **Documentation**: Update `progress.log` with each milestone. Keep this doc and the spec in sync with any new features.

---

## Product Mantras

- “Designed like a magazine, engineered like a platform.”
- “Automation handles the busy work, curation keeps it trustworthy.”
- “Every interaction should feel like paging through a premium intelligence brief.”

Maintain this vision when introducing new functionality—each addition should serve at least one of the core pillars while sustaining the editorial signature. If in doubt, revisit the full spec (`Agents.md.docx`) and open a discussion before diverging. 
