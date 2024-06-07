import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardServiceGuard implements CanActivate {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRoles = route.data.expectedRoles;

    if (!expectedRoles || !this.auth.isLoggedIn || !expectedRoles.includes(this.auth.role)) {
      this.router.navigate(['pages/miscellaneous/access-denied']);
      return false;
    }
    return true;
  }

}
