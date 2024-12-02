import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task.service';
import { Task } from '../task.model';  // Import Task model

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.scss']
})
export class EditTaskComponent implements OnInit {
  task: Task | null = null;

  constructor(
    private taskService: TaskService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const taskId = Number(this.route.snapshot.paramMap.get('id'));
    if (taskId) {
      this.taskService.getTasks().subscribe(tasks => {
        this.task = tasks.find(task => task.id === taskId) || null;
      });
    }
  }

  onSubmit() {
    if (this.task) {
      this.taskService.editTask(this.task).subscribe({
        next: () => {
          // Redirect to the home page after editing
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.error('Error editing task', err);
        }
      });
    }
  }
}
