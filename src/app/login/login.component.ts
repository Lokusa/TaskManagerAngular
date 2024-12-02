import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginModel = {
    email: '',
    password: ''
  };
  errorMessage: string | null = null;

  constructor(private http: HttpClient, private router: Router) {}

  onLogin() {
    this.http.post<any>('https://localhost:7086/api/users/login', this.loginModel)
      .subscribe({
        next: (response) => {
          console.log('Login successful', response);
          localStorage.setItem('token', response.token);  // Store the JWT token
          this.router.navigate(['/home']); // Navigate to home page after login
        },
        error: (error) => {
          console.error('Login error', error);
          this.errorMessage = 'Invalid login credentials';
        }
      });
  }
}
