
"""Base service class for CRUD operations."""
from __future__ import annotations

from typing import Any, Generic, Type, TypeVar

from fastapi.encoders import jsonable_encoder
from pydantic import BaseModel
from sqlalchemy import select
from sqlalchemy.ext.asyncio import AsyncSession

from app.db.database import Base

ModelType = TypeVar("ModelType", bound=Base)
CreateSchemaType = TypeVar("CreateSchemaType", bound=BaseModel)
UpdateSchemaType = TypeVar("UpdateSchemaType", bound=BaseModel)


class BaseService(Generic[ModelType, CreateSchemaType, UpdateSchemaType]):
    """Base class for data access logic for a single model."""

    def __init__(self, model: Type[ModelType]):
        """Initialize the service with a SQLAlchemy model."""
        self.model = model

    async def get(self, session: AsyncSession, id: Any) -> ModelType | None:
        """Get a single record by ID."""
        return await session.get(self.model, id)

    async def get_by(self, session: AsyncSession, **kwargs) -> ModelType | None:
        """Get a single record by arbitrary keyword arguments."""
        result = await session.execute(select(self.model).filter_by(**kwargs))
        return result.scalars().first()

    async def get_multi(
        self, session: AsyncSession, *, skip: int = 0, limit: int = 100
    ) -> list[ModelType]:
        """Get multiple records."""
        result = await session.execute(select(self.model).offset(skip).limit(limit))
        return result.scalars().all()

    async def create(self, session: AsyncSession, *, obj_in: CreateSchemaType) -> ModelType:
        """Create a new record."""
        obj_in_data = jsonable_encoder(obj_in)
        db_obj = self.model(**obj_in_data)
        session.add(db_obj)
        await session.commit()
        await session.refresh(db_obj)
        return db_obj

    async def delete(self, session: AsyncSession, *, id: int) -> ModelType:
        """Delete a record."""
        obj = await session.get(self.model, id)
        await session.delete(obj)
        await session.commit()
        return obj
