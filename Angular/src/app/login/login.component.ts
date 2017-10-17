import { AuthService } from './../services/auth.service';
import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  invalidLogin: boolean;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService) { }

  signIn(credentials) {
    this.authService.login(credentials)
      .subscribe(result => {
        // valid credential
        if (result) {
          const returnUrl = this.route.snapshot.queryParamMap.get('returnUrl');
          // navigate this user to returnUrl if it's defined or home page
          this.router.navigate([returnUrl || '/']);
        }
        // invalid credential
        else
          this.invalidLogin = true;
      });
  }
}
