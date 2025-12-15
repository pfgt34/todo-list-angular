import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, TaskStatus, STATUS_LABELS } from '../models/task.model';
import { TaskItemComponent } from '../task-item/task-item.component';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, TaskItemComponent],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  @Input() tasks: Task[] = [];
  @Input() status!: TaskStatus;
  @Output() statusChange = new EventEmitter<{ taskId: number; newStatus: TaskStatus }>();

  readonly statusLabels = STATUS_LABELS;

  get filteredTasks(): Task[] {
    return this.tasks.filter(task => task.status === this.status);
  }

  onTaskStatusChange(event: { taskId: number; newStatus: TaskStatus }): void {
    this.statusChange.emit(event);
  }
}
