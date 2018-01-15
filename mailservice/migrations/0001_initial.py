# Generated by Django 2.0.1 on 2018-01-15 22:53

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Email',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=500)),
                ('sender_email', models.EmailField(max_length=500)),
                ('message', models.TextField()),
            ],
        ),
        migrations.CreateModel(
            name='EmailConfiguration',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(default='Email Configuration', max_length=200)),
                ('recipient_name', models.CharField(max_length=500)),
                ('recipient_email', models.EmailField(max_length=500)),
                ('subject', models.CharField(max_length=500)),
                ('signature', models.CharField(max_length=500)),
                ('send_emails', models.BooleanField(default=True)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]