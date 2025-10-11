
"""initial schema"""

from __future__ import annotations

from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = "20251003_01"
down_revision = None
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.create_table(
        "news_sources",
        sa.Column("id", sa.String(length=64), primary_key=True),
        sa.Column("name", sa.String(length=255), nullable=False),
        sa.Column("url", sa.String(length=500), nullable=False, unique=True),
        sa.Column("gradient_start", sa.String(length=9), nullable=False),
        sa.Column("gradient_end", sa.String(length=9), nullable=False),
        sa.Column("weight", sa.Float(), nullable=False, server_default=sa.text("1")),
        sa.Column(
            "created_at",
            sa.DateTime(timezone=True),
            nullable=False,
            server_default=sa.text("CURRENT_TIMESTAMP"),
        ),
    )

    op.create_table(
        "news_articles",
        sa.Column("id", sa.String(length=128), primary_key=True),
        sa.Column("slug", sa.String(length=255), nullable=False, unique=True),
        sa.Column("title", sa.String(length=500), nullable=False),
        sa.Column("summary", sa.Text(), nullable=False),
        sa.Column("url", sa.String(length=500), nullable=False),
        sa.Column("published_at", sa.DateTime(timezone=True), nullable=False),
        sa.Column("tags", sa.JSON(), nullable=False),
        sa.Column("source_id", sa.String(length=64), sa.ForeignKey("news_sources.id", ondelete="CASCADE"), nullable=False),
        sa.Column("github_repo_full_name", sa.String(length=255)),
        sa.Column("github_stars", sa.Integer()),
        sa.Column("github_delta_stars", sa.Integer()),
        sa.Column("ranking_score", sa.Float(), nullable=False, server_default="0"),
        sa.Column("hero_image", sa.String(length=500)),
        sa.Column("content", sa.JSON(), nullable=False),
        sa.Column(
            "created_at",
            sa.DateTime(timezone=True),
            nullable=False,
            server_default=sa.text("CURRENT_TIMESTAMP"),
        ),
    )
    op.create_index("ix_news_articles_published_at", "news_articles", ["published_at"])
    op.create_index("ix_news_articles_source_id", "news_articles", ["source_id"])

    op.create_table(
        "weekly_digests",
        sa.Column("id", sa.Integer(), primary_key=True, autoincrement=True),
        sa.Column("week_of", sa.Date(), nullable=False, unique=True),
        sa.Column("headline", sa.String(length=255), nullable=False),
        sa.Column("summary", sa.Text(), nullable=False),
        sa.Column("article_ids", sa.JSON(), nullable=False),
        sa.Column(
            "created_at",
            sa.DateTime(timezone=True),
            nullable=False,
            server_default=sa.text("CURRENT_TIMESTAMP"),
        ),
    )

    op.create_table(
        "benchmarks",
        sa.Column("id", sa.String(length=64), primary_key=True),
        sa.Column("name", sa.String(length=255), nullable=False),
        sa.Column("description", sa.String(length=500), nullable=False),
        sa.Column("higher_is_better", sa.Boolean(), nullable=False, server_default=sa.true()),
        sa.Column("unit", sa.String(length=32)),
        sa.Column(
            "created_at",
            sa.DateTime(timezone=True),
            nullable=False,
            server_default=sa.text("CURRENT_TIMESTAMP"),
        ),
    )

    op.create_table(
        "model_profiles",
        sa.Column("id", sa.String(length=64), primary_key=True),
        sa.Column("name", sa.String(length=255), nullable=False),
        sa.Column("provider", sa.String(length=255), nullable=False),
        sa.Column("release_date", sa.Date(), nullable=False),
        sa.Column("context_window", sa.Integer(), nullable=False),
        sa.Column("license", sa.String(length=64), nullable=False),
        sa.Column("availability", sa.String(length=32), nullable=False),
        sa.Column("max_tokens", sa.Integer()),
        sa.Column("modalities", sa.JSON()),
        sa.Column("notes", sa.String(length=500)),
        sa.Column("summary", sa.String(length=500)),
        sa.Column("website", sa.String(length=500)),
        sa.Column(
            "created_at",
            sa.DateTime(timezone=True),
            nullable=False,
            server_default=sa.text("CURRENT_TIMESTAMP"),
        ),
    )

    op.create_table(
        "pricing_tiers",
        sa.Column("id", sa.Integer(), primary_key=True, autoincrement=True),
        sa.Column("model_id", sa.String(length=64), sa.ForeignKey("model_profiles.id", ondelete="CASCADE"), nullable=False),
        sa.Column("tier", sa.String(length=32), nullable=False),
        sa.Column("price_per_million", sa.Float(), nullable=False),
        sa.Column("currency", sa.String(length=8), nullable=False, server_default=sa.text("'USD'")),
    )

    op.create_table(
        "benchmark_scores",
        sa.Column("id", sa.Integer(), primary_key=True, autoincrement=True),
        sa.Column("model_id", sa.String(length=64), sa.ForeignKey("model_profiles.id", ondelete="CASCADE"), nullable=False),
        sa.Column("benchmark_id", sa.String(length=64), sa.ForeignKey("benchmarks.id", ondelete="CASCADE"), nullable=False),
        sa.Column("raw_score", sa.Float(), nullable=True),
        sa.Column("normalized_score", sa.Float()),
        sa.UniqueConstraint("model_id", "benchmark_id", name="uq_model_benchmark"),
    )

    op.create_table(
        "learning_tracks",
        sa.Column("id", sa.String(length=64), primary_key=True),
        sa.Column("title", sa.String(length=255), nullable=False),
        sa.Column("level", sa.String(length=32), nullable=False),
        sa.Column("time_estimate_hours", sa.Integer(), nullable=False),
        sa.Column("outcome", sa.String(length=500), nullable=False),
        sa.Column("modules", sa.JSON(), nullable=False),
        sa.Column("capstone", sa.JSON(), nullable=False),
        sa.Column("badge", sa.JSON(), nullable=False),
        sa.Column(
            "created_at",
            sa.DateTime(timezone=True),
            nullable=False,
            server_default=sa.text("CURRENT_TIMESTAMP"),
        ),
    )


def downgrade() -> None:
    op.drop_table("learning_tracks")
    op.drop_table("benchmark_scores")
    op.drop_table("pricing_tiers")
    op.drop_table("model_profiles")
    op.drop_table("benchmarks")
    op.drop_table("weekly_digests")
    op.drop_index("ix_news_articles_source_id", table_name="news_articles")
    op.drop_index("ix_news_articles_published_at", table_name="news_articles")
    op.drop_table("news_articles")
    op.drop_table("news_sources")

