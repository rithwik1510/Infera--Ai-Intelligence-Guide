# Contributing to Infera

Thanks for your interest in improving Infera. This guide will help you set up a clean development environment, follow our quality bar, and submit changes confidently.

## Getting Started

1. **Fork & Clone**
   ```bash
   git clone https://github.com/<your-name>/infera.git
   cd infera
   ```
2. **Install Tooling**
   - Node.js ≥ 20
   - Python ≥ 3.11
   - PostgreSQL (for full integration testing) or use the default SQLite fallback during development.
3. **Install Dependencies**
   ```bash
   npm install
   python -m venv .venv && source .venv/bin/activate
   pip install -e ./apps/api
   ```
4. **Prepare Environment**
   ```bash
   cp apps/api/.env.example apps/api/.env
   cp apps/web/.env.local.example apps/web/.env.local
   ```
   Update the values as needed (see `docs/configuration.md` for details).

## Development Workflow

- **Frontend dev server**: `npm run dev:web`
- **API dev server**: `npm run dev:api`
- **Both together**: `npm run dev:all`

Write changes on topic branches:
```bash
git checkout -b feature/amazing-update
```

## Quality Checklist

Before opening a pull request, ensure:

1. `npm run lint:web` (lint + typecheck) passes.
2. `cd apps/api && pytest` passes.
3. Documentation is updated (`README.md`, `docs/*`, `progress.log`) if behaviour changes.
4. Screenshots/GIFs are included for UI updates.
5. Commits are tidy and follow conventional prefixes when possible (e.g. `feat:`, `fix:`, `docs:`).

GitHub Actions run the same lint/test/build suites on every PR (`.github/workflows/*.yml`).

## Submitting a Pull Request

1. Push your branch and open a PR against `main`.
2. Fill out the PR template (if available) with context, testing results, and screenshots.
3. Link related issues.
4. Await review—address feedback promptly and keep the conversation respectful.

## Code of Conduct

This project follows the [Contributor Covenant](CODE_OF_CONDUCT.md). By participating, you agree to uphold an inclusive and respectful environment.

## Discussions & Support

- Feature ideas: open a discussion on GitHub or leave a note in `progress.log`.
- Bugs: file an issue with steps to reproduce.
- Ops inquiries: see `docs/operating-handbook.md` and `docs/deployment.md`.

We appreciate your contributions—whether it’s a bug fix, documentation improvement, or new feature proposal. Thank you for helping build a premium AI intelligence experience! 
