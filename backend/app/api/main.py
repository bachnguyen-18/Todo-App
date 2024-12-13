from fastapi import APIRouter

from app.api.routes import items, login, private, todos, users, utils, sub_todo,category
from app.core.config import settings

api_router = APIRouter()
api_router.include_router(login.router)
api_router.include_router(users.router)
api_router.include_router(utils.router)
api_router.include_router(items.router)
api_router.include_router(todos.router)
api_router.include_router(sub_todo.router)
api_router.include_router(category.router)


if settings.ENVIRONMENT == "local":
    api_router.include_router(private.router)
