import { Http, RequestOptions, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { AuthHttp } from 'angular2-jwt';

@Injectable()
export class OrderService {

  constructor(private http: Http) {
  }

  getOrders() {
    // create a header and store token in it
    const headers = new Headers();
    const token = localStorage.getItem('token');
    headers.append('Authorization', 'Bearer ' + token);

    // include this in request
    const options = new RequestOptions({ headers: headers });

    return this.http.get('/api/orders', options)
      .map(response => response.json());
  }

  // a shorter version of commented code above
  // note: use both http and authHttp to access both
  // protected and unprotected routes
  // note: need to configure authHttp
  //
  // constructor(private authHttp: AuthHttp) {
  // }

  // getOrders() {
  //   return this.authHttp.get('api/orders')
  //     .map(response => response.json());
  // }

}
