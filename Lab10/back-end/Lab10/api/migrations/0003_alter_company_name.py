# Generated by Django 4.1.7 on 2023-04-06 12:44

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("api", "0002_company_vacancy_remove_product_category_and_more"),
    ]

    operations = [
        migrations.AlterField(
            model_name="company",
            name="name",
            field=models.CharField(default="", max_length=100),
        ),
    ]
