"""Command to create default super user."""

from django.core.management import BaseCommand
from django.contrib.auth.models import User


class Command(BaseCommand):
    help = 'creates default super user then building the application first time.'

    def handle(self, *args, **options):
        """Create default super user."""
        if not User.objects.get(username='root'):
            User.objects.create_superuser('root', 'root@admin.com', 'root')
