import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

export const AuthGuard: CanActivateFn = () => {
  const authService = inject(AuthService);
  const router = inject(Router);
  console.log('Guard check:', authService.isLoggedIn); // Añade logging para depuración

  if (authService.isLoggedIn) {
    return true;
  } else {
    router.navigate(['/auth/login']);
    return false;
  }
};
