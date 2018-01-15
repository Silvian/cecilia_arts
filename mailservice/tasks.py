"""Celery tasks."""

from celery.utils.log import get_task_logger
from cecilia_arts.celery import app

logger = get_task_logger(__name__)


@app.task
def test_task():
    logger.info("Hello World!")
