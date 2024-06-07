import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isLoggedIn: boolean = false;
  private _role: string | null = null;
  private timeoutId: any;

  constructor(private router: Router) {
    const token = localStorage.getItem('authToken');
    this._isLoggedIn = !!token;
    this._role = localStorage.getItem('userRole');
    this.setupSessionTimeout();

    window.addEventListener('beforeunload', () => {
      this.logout();
    });
  }

  get isLoggedIn(): boolean {
    return this._isLoggedIn;
  }

  get role(): string | null {
    return this._role;
  }

  login(email: string, password: string): Promise<void> {
    return new Promise((resolve, reject) => {
      console.log('Login attempt:', email, password);
      if (email === 'admin@amc-sc.mx' && password === '123456') {
        localStorage.setItem('authToken', 'dummy-token');
        localStorage.setItem('userRole', 'admin');
        this._isLoggedIn = true;
        this._role = 'admin';
        this.setupSessionTimeout();
        resolve();
      } else if (email === 'user@amc-sc.mx' && password === '123456') {
        localStorage.setItem('authToken', 'dummy-token');
        localStorage.setItem('userRole', 'user');
        this._isLoggedIn = true;
        this._role = 'user';
        this.setupSessionTimeout();
        resolve();
      } else if (email === 'guest@amc-sc.mx' && password === '123456') {
        localStorage.setItem('authToken', 'dummy-token');
        localStorage.setItem('userRole', 'guest');
        this._isLoggedIn = true;
        this._role = 'guest';
        this.setupSessionTimeout();
        resolve();
      } else {
        reject({ code: 'auth/wrong-credentials' });
      }
    });
  }

  logout(): void {
    localStorage.removeItem('authToken');
    localStorage.removeItem('userRole');
    this._isLoggedIn = false;
    this._role = null;
    this.router.navigate(['/auth/login']);
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  private setupSessionTimeout() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
    this.timeoutId = setTimeout(() => {
      this.logout();
    }, 30 * 60 * 1000); // Cerrar sesión después de 30 minutos de inactividad
  }
}
