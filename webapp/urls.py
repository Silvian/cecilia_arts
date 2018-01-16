"""webapp URL Configuration"""

from django.urls import path

from webapp.views import HomeView

urlpatterns = [
    path('', HomeView.as_view(), name="index"),
]
