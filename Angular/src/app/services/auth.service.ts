import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { JwtHelper, tokenNotExpired } from 'angular2-jwt';

@Injectable()
export class AuthService {

  constructor(private http: Http) { }

  /*
   * Return ture if successfully login. Otherwise false.
   */
  login(credentials) {
    return this.http.post('/api/authenticate',
      JSON.stringify(credentials))
        .map(response => {
          let result = response.json();
          // valid JWT with a token
          if (result && result.token) {
            localStorage.setItem('token', result.token);
            return true;
          // no valid JWT
          } else {
            false;
          }
        });
  }

  logout() {
  
    // delete token
    localStorage.removeItem('token');
  }

  isLoggedIn() {
    // this static method provided by angular2-jwt does
    // exact the following
    return tokenNotExpired();

    // let jwtHelper = new JwtHelper();
    // let token = localStorage.getItem('token');
    // // not logged in if no token
    // if (!token)
    //   return false;

    // let expirationDate = jwtHelper.getTokenExpirationDate(token);
    // let isExpired = jwtHelper.isTokenExpired(token);

    // return !isExpired;
  }

  get currentUser() {
    let token = localStorage.getItem('token');
    if (!token)
      return null;

    let jwtHelper = new JwtHelper();
    return jwtHelper.decodeToken(token);

  }
}
