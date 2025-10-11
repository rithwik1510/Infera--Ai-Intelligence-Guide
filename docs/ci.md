# Continuous Integration Blueprint

Use this document as a starting point for GitHub Actions (or any CI provider) to keep Infera’s quality bar on par with top-tier engineering teams.

---

## Workflow Overview

Recommended pipelines:

1. **lint-web** – TypeScript lint + type check for the Next.js app
2. **test-api** – Pytest suite for the FastAPI service
3. **build-web** – Next.js production build to catch SSR/edge errors
4. **container-api** *(optional)* – Build and publish API Docker image

Trigger on pull requests and pushes to `main`.

---

## Example GitHub Actions Workflows

### `.github/workflows/lint-web.yml`
```yaml
name: lint-web

on:
  pull_request:
  push:
    branches: [main]

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: "npm"
      - run: npm ci
      - run: npm run lint:web
```

### `.github/workflows/test-api.yml`
```yaml
name: test-api

on:
  pull_request:
  push:
    branches: [main]

jobs:
  pytest:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with:
          python-version: "3.12"
      - name: Install deps
        run: |
          python -m pip install --upgrade pip
          pip install -e ./apps/api
      - name: Run tests
        working-directory: apps/api
        env:
          AI_HELPER_DATABASE_URL: sqlite+aiosqlite:///./ci.db
          AI_HELPER_JWT_SECRET_KEY: ci-test-secret
        run: pytest
```

### `.github/workflows/build-web.yml`
```yaml
name: build-web

on:
  pull_request:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: "npm"
      - run: npm ci
      - name: Build Next.js
        env:
          NEXT_PUBLIC_API_URL: https://api.example.com # override in real env
          AI_HELPER_API_URL: https://api.example.com
        run: npm run build:web
```

---

## Status Badges

Once workflows are in place, add badges to `README.md`:

```markdown
[![lint-web](https://github.com/<org>/infera/actions/workflows/lint-web.yml/badge.svg)](https://github.com/<org>/infera/actions/workflows/lint-web.yml)
[![test-api](https://github.com/<org>/infera/actions/workflows/test-api.yml/badge.svg)](https://github.com/<org>/infera/actions/workflows/test-api.yml)
```

Replace `<org>` with your GitHub organisation/user.

---

## Tips

- Use job summaries (`::group::` logs, `actions/upload-artifact`) to attach screenshots or coverage reports.
- Cache `pip` directories (e.g. `~/.cache/pip`) to speed up test jobs.
- Gate merges with branch protection requiring `lint-web` and `test-api` to pass.
- For Docker images, add a `docker login` step using GitHub Packages or GHCR.

Adopt and extend this blueprint to keep your release pipeline fast, reliable, and transparent. 
