from rest_framework import viewsets
from rest_framework.views import APIView
from rest_framework.response import Response
from usertask.serializers import TaskSerializer
from .models import Task
from rest_framework.permissions import IsAuthenticated


class TaskViewSet(viewsets.ModelViewSet):
    permission_classes = [IsAuthenticated]
    queryset = Task.objects.all()
    serializer_class = TaskSerializer

class DashboardAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({
            "total_tasks": Task.objects.count(),
            "completed_tasks": Task.objects.filter(isCompleted=True).count()
        })
