"""Application configuration utilities."""
from __future__ import annotations

from functools import lru_cache
import secrets

from pydantic import AnyUrl, Field, SecretStr, field_validator, model_validator
from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    """Base application settings loaded from environment variables."""

    model_config = SettingsConfigDict(env_prefix="AI_HELPER_", env_file=".env", extra="ignore")

    environment: str = "development"
    database_url: AnyUrl | str = "postgresql+asyncpg://ai_helper:ai_helper@localhost:5432/ai_helper"
    redis_url: AnyUrl | str = "redis://localhost:6379/0"
    ingestion_interval_minutes: int = 30
    ingestion_enabled: bool = True
    log_level: str = "INFO"
    metrics_enabled: bool = True
    meilisearch_url: AnyUrl | None = None
    meilisearch_api_key: str | None = None
    cors_origins: list[str] = Field(default_factory=lambda: ["http://localhost:3000"])

    jwt_secret_key: SecretStr | None = None
    jwt_algorithm: str = "HS256"
    jwt_expire_minutes: int = 60

    @field_validator("cors_origins", mode="before")
    @classmethod
    def _split_cors_origins(cls, value: list[str] | str) -> list[str]:
        if isinstance(value, str):
            return [item.strip() for item in value.split(",") if item.strip()]
        return value

    @model_validator(mode="after")
    def _ensure_secret_key(self) -> "Settings":
        if self.jwt_secret_key is None:
            generated = secrets.token_urlsafe(48)

            self.jwt_secret_key = SecretStr(generated)
        return self


@lru_cache()
def get_settings() -> Settings:
    """Return cached settings instance."""

    return Settings()


settings = get_settings()
