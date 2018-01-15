"""Email service models."""

from django.db import models

from . tasks import send_email


class SingletonModel(models.Model):
    """Singleton abstract model."""
    class Meta:
        abstract = True

    def save(self, *args, **kwargs):
        """Override the save method to prevent multiple instances."""
        self.pk = 1
        super(SingletonModel, self).save(*args, **kwargs)

    def delete(self, *args, **kwargs):
        """Override the delete method to prevent object deletion."""
        pass

    @classmethod
    def load(cls):
        """Main method when getting a singleton object."""
        obj, created = cls.objects.get_or_create(pk=1)
        return obj


class EmailConfiguration(SingletonModel):
    """Email configuration model."""
    name = models.CharField(
        max_length=200,
        default='Email Configuration',
    )
    recipient_name = models.CharField(max_length=500)
    recipient_email = models.EmailField(max_length=500)
    subject = models.CharField(max_length=500)
    signature = models.CharField(max_length=500)
    send_emails = models.BooleanField(default=True)

    def __str__(self):
        return self.name


class Email(models.Model):
    """Email model."""
    name = models.CharField(max_length=500)
    sender_email = models.EmailField(max_length=500)
    message = models.TextField()

    def save(self, *args, **kwargs):
        """Override the save model to send email task."""
        send_email.delay(
            sender_name=self.name,
            sender_email=self.sender_email,
            message=self.message,
        )

        super(Email, self).save(*args, **kwargs)

    def __str__(self):
        return self.sender_email
