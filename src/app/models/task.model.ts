export type TaskStatus = 'backlog' | 'a-faire' | 'en-cours' | 'terminee';

export interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
}

export const STATUS_LABELS: Record<TaskStatus, string> = {
  'backlog': 'Backlog',
  'a-faire': 'À faire',
  'en-cours': 'En cours',
  'terminee': 'Terminée'
};
