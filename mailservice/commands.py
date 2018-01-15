"""Mail service commands."""
from django.core.mail import EmailMultiAlternatives
from django.template.loader import get_template


class MailService:
    """Mail service."""

    text_template = get_template('webapp/email/request_email.txt')
    html_template = get_template('webapp/email/request_email.html')

    @classmethod
    def send_email(
            cls, sender_email, sender_name, recipient_name, recipient_email, subject, message):
        """Send email main command function."""
        context = {'recipient_name': recipient_name, 'message': message, 'sender_name': sender_name}
        text_content = cls.text_template.render(context)
        html_content = cls.html_template.render(context)

        msg = EmailMultiAlternatives(subject, text_content, sender_email, [recipient_email])
        msg.attach_alternative(html_content, "text/html")
        return msg.send()
