"""Prometheus metrics utilities."""
from __future__ import annotations

from prometheus_client import Counter, Histogram

REQUEST_COUNT = Counter(
    "ai_helper_requests_total",
    "Total HTTP requests",
    labelnames=("method", "path", "status"),
)

REQUEST_LATENCY = Histogram(
    "ai_helper_request_latency_seconds",
    "Latency of HTTP requests in seconds",
    labelnames=("method", "path"),
)
