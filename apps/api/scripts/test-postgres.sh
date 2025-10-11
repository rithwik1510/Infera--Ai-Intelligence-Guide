#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
PROJECT_ROOT="${SCRIPT_DIR}/.."

cd "${PROJECT_ROOT}"

: "${AI_HELPER_DATABASE_URL:=postgresql+asyncpg://ai_helper:ai_helper@localhost:5432/ai_helper}"

export AI_HELPER_DATABASE_URL

alembic -c alembic.ini upgrade head
python -m pytest
