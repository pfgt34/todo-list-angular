import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, TaskStatus, STATUS_LABELS } from '../models/task.model';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() statusChange = new EventEmitter<{ taskId: number; newStatus: TaskStatus }>();

  readonly statusLabels = STATUS_LABELS;
  readonly statuses: TaskStatus[] = ['backlog', 'a-faire', 'en-cours', 'terminee'];

  onStatusChange(newStatus: TaskStatus): void {
    this.statusChange.emit({ taskId: this.task.id, newStatus });
  }

  getStatusClass(): string {
    return `status-${this.task.status}`;
  }
}
