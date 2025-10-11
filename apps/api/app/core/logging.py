"""Logging helpers."""
from __future__ import annotations

import logging
from typing import Literal

from app.core.config import settings

LOG_LEVELS: dict[str, int] = {
    "CRITICAL": logging.CRITICAL,
    "ERROR": logging.ERROR,
    "WARNING": logging.WARNING,
    "INFO": logging.INFO,
    "DEBUG": logging.DEBUG,
}


def setup_logging() -> None:
    """Configure structured logging for the service."""
    level_name = settings.log_level.upper()
    level = LOG_LEVELS.get(level_name, logging.INFO)
    logging.basicConfig(
        level=level,
        format="%(asctime)s | %(levelname)s | %(name)s | %(message)s",
    )
