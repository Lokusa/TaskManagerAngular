import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  tasks: Task[] = [];
  editTaskModel: Task = { id: 0, title: '', description: '', dueDate: '', completed: false }; // Model for editing
  newTaskModel: Task = { id: 0, title: '', description: '', dueDate: '', completed: false };  // Model for creating

  constructor(
    private taskService: TaskService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadTasks();
  }

  // Fetch all tasks from the backend
  loadTasks(): void {
    this.taskService.getTasks().subscribe(
      tasks => this.tasks = tasks,
      error => console.error('Error loading tasks:', error)
    );
  }

  // Create a new task
  createTask(): void {
    this.taskService.createTask(this.newTaskModel).subscribe(
      task => {
        console.log('Task created successfully:', task);
        this.newTaskModel = { id: 0, title: '', description: '', dueDate: '', completed: false }; // Reset after creation
        this.loadTasks();  // Reload tasks after creation
      },
      error => {
        console.error('Error creating task:', error);
      }
    );
  }

  // Edit an existing task
  editTask(task: Task): void {
    this.editTaskModel = { ...task }; // Pre-fill the edit form with existing task data
  }

  // Save the edited task
  saveTask(): void {
    this.taskService.editTask(this.editTaskModel).subscribe(
      updatedTask => {
        console.log('Task updated successfully:', updatedTask);
        this.loadTasks(); // Reload tasks after successful update
      },
      error => console.error('Error updating task:', error)
    );
  }

  // Delete a task by ID
  deleteTask(taskId: number): void {
    console.log('Task ID:', taskId);  // Check if taskId is being passed correctly
    if (taskId) {
      this.taskService.deleteTask(taskId).subscribe(
        () => {
          console.log('Task deleted');
          this.loadTasks();  // Reload tasks after deletion
        },
        (error) => {
          console.error('Error deleting task:', error);
        }
      );
    } else {
      console.error('Invalid task ID:', taskId);
    }
  }
  
  

  // Toggle task status (Complete/Incomplete)
  toggleStatus(task: Task): void {
    task.completed = !task.completed;
    this.saveTask(); // Save updated task status
  }

  // Logout method (added in the previous part)
  onLogout(): void {
    this.authService.logout(); // Logout logic here
    this.router.navigate(['/login']); // Redirect to login page
  }
}
