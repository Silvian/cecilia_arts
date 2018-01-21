from django.conf import settings
from django.core.management import BaseCommand

from mailservice.models import EmailConfiguration


class Command(BaseCommand):
    """Create default email configurations."""

    help = __doc__

    def handle(self, *args, **options):
        """Create default email configurations."""
        email_conf, created = EmailConfiguration.objects.get_or_create(
            name='Email Configuration',
            defaults={
                'recipient_name': settings.EMAIL_RECIPIENT_NAME or '',
                'recipient_email': settings.EMAIL_RECIPIENT_EMAIL or '',
                'subject': settings.EMAIL_SUBJECT or '',
                'signature': settings.EMAIL_SIGNATURE or '',
            },
        )

        if created:
            print("Default email configurations created:", email_conf.name)

        else:
            print("Email configurations already exists.")
