"""Celery tasks."""

from celery.utils.log import get_task_logger
from cecilia_arts.celery import app
from . commands import MailService

logger = get_task_logger(__name__)


@app.task
def send_email(sender_name, sender_email, message):
    """Send email celery task."""
    from mailservice.models import EmailConfiguration
    email_settings = EmailConfiguration.load()

    logger.info("Sending email to: {}".format(email_settings.recipient_name))
    if not MailService.send_email(
            sender_email=sender_email,
            sender_name=sender_name,
            recipient_name=email_settings.recipient_name,
            recipient_email=email_settings.recipient_email,
            subject=email_settings.subject,
            message=message):
        logger.warn(
            "Failed to send email to the following recipient: {}".format(
                email_settings.recipient_email))
