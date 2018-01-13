"""webapp views"""

from django.shortcuts import render


def index_view(request):
    """Render index view."""
    return render(request, "webapp/index.html")

