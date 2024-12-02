import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';  // Make sure to import your TaskService
import { Task } from '../task.model'; // Import Task model

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.scss']
})
export class CreateTaskComponent {
  task: Task = {
    id: 0,
    title: '',
    description: '',
    dueDate: '',
    completed: false
  };

  constructor(private taskService: TaskService, private router: Router) {}

  onSubmit() {
    this.taskService.createTask(this.task).subscribe({
      next: () => {
        // Redirect to home or task list page after task is created
        this.router.navigate(['/home']);
      },
      error: (err) => {
        console.error('Error creating task', err);
      }
    });
  }
}
