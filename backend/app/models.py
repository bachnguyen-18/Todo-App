from datetime import datetime
import uuid
from enum import Enum

from pydantic import EmailStr
from sqlmodel import Field, Relationship, SQLModel


# Shared properties
class UserBase(SQLModel):
    email: EmailStr = Field(unique=True, index=True, max_length=255)
    is_active: bool = True
    is_superuser: bool = False
    full_name: str | None = Field(default=None, max_length=255)


# Properties to receive via API on creation
class UserCreate(UserBase):
    password: str = Field(min_length=8, max_length=40)


class UserRegister(SQLModel):
    email: EmailStr = Field(max_length=255)
    password: str = Field(min_length=8, max_length=40)
    full_name: str | None = Field(default=None, max_length=255)


# Properties to receive via API on update, all are optional
class UserUpdate(UserBase):
    email: EmailStr | None = Field(default=None, max_length=255)  # type: ignore
    password: str | None = Field(default=None, min_length=8, max_length=40)


class UserUpdateMe(SQLModel):
    full_name: str | None = Field(default=None, max_length=255)
    email: EmailStr | None = Field(default=None, max_length=255)


class UpdatePassword(SQLModel):
    current_password: str = Field(min_length=8, max_length=40)
    new_password: str = Field(min_length=8, max_length=40)


# Database model, database table inferred from class name
class User(UserBase, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    hashed_password: str
    items: list["Item"] = Relationship(back_populates="owner", cascade_delete=True)
    todos: list["Todo"] = Relationship(back_populates="owner", cascade_delete=True)


# Properties to return via API, id is always required
class UserPublic(UserBase):
    id: uuid.UUID


class UsersPublic(SQLModel):
    data: list[UserPublic]
    count: int


# Shared properties
class ItemBase(SQLModel):
    title: str = Field(min_length=1, max_length=255)
    description: str | None = Field(default=None, max_length=255)


# Properties to receive on item creation
class ItemCreate(ItemBase):
    pass


# Properties to receive on item update
class ItemUpdate(ItemBase):
    title: str | None = Field(default=None, min_length=1, max_length=255)  # type: ignore


# Database model, database table inferred from class name
class Item(ItemBase, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    title: str = Field(max_length=255)
    owner_id: uuid.UUID = Field(
        foreign_key="user.id", nullable=False, ondelete="CASCADE"
    )
    owner: User | None = Relationship(back_populates="items")


# Properties to return via API, id is always required
class ItemPublic(ItemBase):
    id: uuid.UUID
    owner_id: uuid.UUID


class ItemsPublic(SQLModel):
    data: list[ItemPublic]
    count: int


# Generic message
class Message(SQLModel):
    message: str


# JSON payload containing access token
class Token(SQLModel):
    access_token: str
    token_type: str = "bearer"


# Contents of JWT token
class TokenPayload(SQLModel):
    sub: str | None = None


class NewPassword(SQLModel):
    token: str
    new_password: str = Field(min_length=8, max_length=40)

# Shared properties
class StatusEnum(str, Enum):
    pending = "pending"
    completed = "completed"
    in_progress = "in_progress"
    
class TodoBase(SQLModel):
    title: str = Field(min_length=1, max_length=255)
    desc: str = Field(max_length=255)
    created_at: datetime | None = Field(default_factory=datetime.now, nullable=True)
    updated_at: datetime | None = Field(default_factory=datetime.now, nullable=True)

# Table Todo
class Todo(TodoBase, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    owner_id: uuid.UUID = Field(
        foreign_key="user.id", nullable=False, ondelete="CASCADE"
    )
    status: str = Field(default="in_progress", max_length=255)
    owner: User | None = Relationship(back_populates="todos")
    subtodos: list["SubTodo"] = Relationship(back_populates="todo", cascade_delete=True)

class TodoCreate(TodoBase):
    pass

# Properties to receive on item update
class TodoUpdate(TodoBase):
    title: str | None = Field(default=None, min_length=1, max_length=255)  # type: ignore
    desc: str | None = Field(default=None, max_length=255)
    status: str | None = Field(default=None, max_length=255)

class TodoPublic(TodoBase):
    id: uuid.UUID
    owner_id: uuid.UUID
    status: str

class TodosPublic(SQLModel):
    data: list[TodoPublic]
    count: int

class TodoUpdateMultiple(SQLModel):
    todo_ids: list[uuid.UUID]
    status: str
    
# Table SubTodo
class SubTodoBase(SQLModel):
    title: str = Field(min_length=1, max_length=255)
    desc: str = Field(max_length=255)
    created_at: datetime | None = Field(default_factory=datetime.now, nullable=True)
    updated_at: datetime | None = Field(default_factory=datetime.now, nullable=True)

class SubTodo(SubTodoBase, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    todo_id: uuid.UUID = Field(
        foreign_key="todo.id", nullable=False, ondelete="CASCADE"
    )
    status: str = Field(default="in_progress", max_length=255)
    todo: Todo | None = Relationship(back_populates="subtodos")

class SubTodoCreate(SQLModel):
    title: str = Field(min_length=1, max_length=255)
    desc: str = Field(max_length=255)

# Properties to receive on item update
class SubTodoUpdate(SubTodoBase):
    title: str | None = Field(default=None, min_length=1, max_length=255)  # type: ignore
    desc: str | None = Field(default=None, max_length=255)
    status: str | None = Field(default=None, max_length=255)
    
class SubTodoPublic(SubTodoBase):
    id: uuid.UUID
    desc: str | None = Field(default=None, max_length=255)
    todo_id: uuid.UUID
    status: str

class SubTodosPublic(SQLModel):
    data: list[SubTodoPublic]
    count: int