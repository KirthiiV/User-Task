from django.db import models

class Task(models.Model):
    title = models.CharField(max_length=150)
    description = models.CharField(max_length=200)
    isCompleted = models.BooleanField(default=False)
    createdOn = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title