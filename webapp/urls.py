"""webapp URL Configuration"""

from django.urls import path

from webapp import views

urlpatterns = [
    path('', views.index_view, name="index"),
]