"""mail url configurations."""
from django.urls import path

from mailservice.views import send_email_view

urlpatterns = [
    path('sendEmail/', send_email_view, name="sendEmail"),
]
