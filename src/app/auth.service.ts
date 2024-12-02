import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() {}

  logout() {
    // Remove the stored token or any session data
    localStorage.removeItem('authToken');  // Example: Remove token from localStorage

    // Any other logout logic you need to handle (like clearing user data)
  }

  isLoggedIn(): boolean {
    // Check if a user is logged in (example: check for token in localStorage)
    return !!localStorage.getItem('authToken');
  }
}
