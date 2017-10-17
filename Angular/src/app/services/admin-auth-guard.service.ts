import { AuthService } from './auth.service';
import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AdminAuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthService) { }

  // only grant permission if user is an admin
  canActivate() {
    const user = this.authService.currentUser;

    // if user logged in and user is an admin
    if (user && user.admin)
      return true;

    this.router.navigate(['/no-access']);
    return false;
  }

}
