import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, TaskStatus, STATUS_LABELS } from '../models/task.model';

@Component({
  selector: 'app-task-stats',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-stats.component.html',
  styleUrl: './task-stats.component.css'
})
export class TaskStatsComponent {
  @Input() tasks: Task[] = [];

  readonly statuses: TaskStatus[] = ['backlog', 'a-faire', 'en-cours', 'terminee'];
  readonly statusLabels = STATUS_LABELS;

  get totalTasks(): number {
    return this.tasks.length;
  }

  getCountByStatus(status: TaskStatus): number {
    return this.tasks.filter(task => task.status === status).length;
  }

  getPercentage(status: TaskStatus): number {
    if (this.totalTasks === 0) return 0;
    return Math.round((this.getCountByStatus(status) / this.totalTasks) * 100);
  }

  get completionRate(): number {
    if (this.totalTasks === 0) return 0;
    return Math.round((this.getCountByStatus('terminee') / this.totalTasks) * 100);
  }
}
