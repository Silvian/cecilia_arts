"""Mail service forms."""
from django import forms

from mailservice.models import Email


class EmailForm(forms.ModelForm):
    def __init__(self, *args, **kwargs):
        super(EmailForm, self).__init__(*args, **kwargs)

    class Meta:
        model = Email
        fields = ('name', 'sender_email', 'message')
