# Generated by Django 2.2.5 on 2019-10-30 21:08

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('brands_app', '0008_donation_lobbyist_pac'),
    ]

    operations = [
        migrations.AddField(
            model_name='company',
            name='donations',
            field=models.ManyToManyField(blank=True, to='brands_app.Donation'),
        ),
    ]
