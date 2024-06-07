import { Component } from '@angular/core';
import { AuthService } from './../auth.service';

@Component({
  selector: 'lms-logout',
  template: '<p>LOGOUT</p>',
  styles: []
})
export class LogoutComponent {

  constructor(private authService: AuthService) {
    try {
      this.authService.logout();
      console.log('Logout successful');
    } catch (err) {
      console.error('Logout error:', err);
    }
  }

}

