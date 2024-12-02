import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from './task.model';  // Make sure you have a task model that matches the task structure

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = 'https://localhost:7086/api/tasks'; // API URL for your tasks controller

  constructor(private http: HttpClient) {}

  // Get all tasks
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }

  // Create a new task
  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }

  // Edit an existing task
  editTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task);
  }



// In TaskService (task.service.ts)
deleteTask(taskId: number): Observable<void> {
  return this.http.delete<void>(`${this.apiUrl}/${taskId}`);  // Ensure taskId is passed correctly
}

}
