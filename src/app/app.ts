import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task, TaskStatus } from './models/task.model';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskStatsComponent } from './task-stats/task-stats.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TaskListComponent, TaskStatsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Gestionnaire de Tâches';

  // Liste des statuts pour l'affichage
  readonly statuses: TaskStatus[] = ['backlog', 'a-faire', 'en-cours', 'terminee'];

  // Liste des tâches (données du parent)
  tasks: Task[] = [
    { id: 1, title: 'Configurer le projet Angular', description: 'Initialiser le projet avec ng new', status: 'terminee' },
    { id: 2, title: 'Créer les composants', description: 'TaskList, TaskItem et TaskStats', status: 'en-cours' },
    { id: 3, title: 'Implémenter la communication', description: 'Utiliser @Input et @Output', status: 'en-cours' },
    { id: 4, title: 'Ajouter les styles CSS', description: 'Styliser l\'application', status: 'a-faire' },
    { id: 5, title: 'Tester l\'application', description: 'Vérifier le bon fonctionnement', status: 'a-faire' },
    { id: 6, title: 'Ajouter des animations', description: 'Transitions fluides entre les états', status: 'backlog' },
    { id: 7, title: 'Implémenter le drag & drop', description: 'Permettre de déplacer les tâches', status: 'backlog' },
    { id: 8, title: 'Ajouter la persistance', description: 'Sauvegarder dans localStorage', status: 'backlog' }
  ];

  // Méthode pour changer le statut d'une tâche
  onStatusChange(event: { taskId: number; newStatus: TaskStatus }): void {
    const task = this.tasks.find(t => t.id === event.taskId);
    if (task) {
      task.status = event.newStatus;
    }
  }
}
