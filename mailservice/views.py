import json

from django.http import HttpResponse

from mailservice.forms import EmailForm


def send_email_view(request):
    """Send email view."""
    if request.method == 'POST':
        form = EmailForm(request.POST)
        form.save()

        return HttpResponse(json.dumps(
            "Email sent successfully"),
            content_type='application/json'
        )
