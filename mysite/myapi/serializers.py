# serializers.py
from rest_framework import serializers

from .models import Usuario

class UsuarioSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Usuario
        fields = ('nome', 'sobrenome', 'email')