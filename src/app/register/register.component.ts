import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';  // Import FormsModule for ngModel

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  registerModel = {
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    confirmPassword: ''
  };

  constructor(private http: HttpClient, private router: Router) {}

  onRegister() {
    // Simple password confirmation check
    if (this.registerModel.password !== this.registerModel.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    this.http.post('https://localhost:7086/api/Users/register', this.registerModel)
      .subscribe({
        next: (response) => {
          console.log('Registration successful', response);
          this.router.navigate(['/login']); // Navigate to login page after registration
        },
        error: (error) => {
          console.error('There was an error!', error);
        }
      });
  }
}
