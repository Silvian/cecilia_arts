"""webapp views"""

from django.views.generic import TemplateView


class HomeView(TemplateView):
    """Render index view."""

    template_name = "webapp/index.html"
