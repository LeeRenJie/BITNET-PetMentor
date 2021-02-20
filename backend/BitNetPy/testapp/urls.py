from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('Dashboard',index),
    path('Pets', index),
    path('Stats', index)
]