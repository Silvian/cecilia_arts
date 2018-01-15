from django.contrib import admin

# Register your models here.
from . models import Email, EmailConfiguration

admin.site.register(Email)
admin.site.register(EmailConfiguration)
