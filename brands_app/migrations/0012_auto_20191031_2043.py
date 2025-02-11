# Generated by Django 2.2.5 on 2019-10-31 20:43

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('brands_app', '0011_auto_20191031_2029'),
    ]

    operations = [
        migrations.AlterField(
            model_name='donation',
            name='lobbyist',
            field=models.ForeignKey(blank='True', on_delete=django.db.models.deletion.PROTECT, to='brands_app.Lobbyist'),
        ),
        migrations.AlterField(
            model_name='donation',
            name='pacs',
            field=models.ForeignKey(blank='True', on_delete=django.db.models.deletion.PROTECT, to='brands_app.PAC'),
        ),
        migrations.AlterField(
            model_name='donation',
            name='politician',
            field=models.ForeignKey(blank='True', on_delete=django.db.models.deletion.PROTECT, to='brands_app.Politician'),
        ),
    ]
