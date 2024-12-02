import { Component } from '@angular/core';

interface Task {
  id: number;
  title: string;
  description: string;
  dueDate: string;
  completed: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  tasks: Task[] = [
    {
      id: 1,
      title: 'Task 1',
      description: 'Description of task 1',
      dueDate: '2024-12-05',
      completed: false
    },
    {
      id: 2,
      title: 'Task 2',
      description: 'Description of task 2',
      dueDate: '2024-12-06',
      completed: true
    }
  ];

  onCreateTask() {
    // Navigate to task creation page or open a modal
    console.log('Create Task button clicked!');
  }

  editTask(task: Task) {
    // Edit task logic, open a modal or navigate to edit page
    console.log('Edit Task:', task);
  }

  deleteTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  toggleStatus(task: Task) {
    task.completed = !task.completed;
  }
}
