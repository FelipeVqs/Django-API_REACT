from django.db import models

# Create your models here.

class Usuario(models.Model):
    id = models.AutoField(primary_key=True)
    nome = models.CharField(max_length=60)
    sobrenome = models.CharField(max_length=60)
    email = models.CharField(max_length=60)

    def __str__(self):
        return self.nome