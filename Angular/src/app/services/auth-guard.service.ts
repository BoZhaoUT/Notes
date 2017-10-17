import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {

  // this is an example of route guard
  constructor(private router: Router, private authService: AuthService) { }

  canActivate(route, state: RouterStateSnapshot) {
    // if this user is logged in
    if (this.authService.isLoggedIn())
      return true;

    // if this use is not logged in, then navigate the user to login page
    // this second parameters is an object with key queryParams
    // and a value of anther object { returnUrl: url_user_comes_from }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
    return false;
  }

}
