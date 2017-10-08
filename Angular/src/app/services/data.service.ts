import { AppError } from './../common/app-error';
import { BadInput } from './../common/bad-input';
import { NotFoundError } from './../common/not-found-error';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
// .catch is not a built-in method
import 'rxjs/add/operator/catch';
// Observable.throw() is a factory method as it createa a new object
import 'rxjs/add/observable/throw';

import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  // private will implicitly creaet this.http = http;
  constructor(private url: string, private http: Http) { }

  // sample get request
  getAll() {
    return this.http.get(this.url)
        // transform response object to json object
        .map(response => response.json())
        .catch(this.handleError);
  }

  // sample post request
  create(resource) {
    // the line below stimulates an error for testing
    // return Observable.throw(new AppError());
    return this.http.post(this.url, JSON.stringify(resource))
        .map(response => response.json())
        .catch(this.handleError);
  }

  // sample patch/put request
  update(resource) {
    // patch is for changing a few fields in an object
    // an put takes an entire object
    // note: not all APIs support patch
    return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
        .map(response => response.json())
        .catch(this.handleError);
    // return this.http.put(this.url + '/' + post.id, JSON.stringify(post))
    //   .catch(this.handleError)
  }

  // sample delete request
  delete(id) {
    // note: this functions must return an Observable object
    // if this.http.delete(this.url + '/' + id) has errors
    // then .catch() will catch the errors
    // and .catch() return an Observable object contains
    // a customized error
    return this.http.delete(this.url + '/' + id)
        .map(response => response.json())
        // .catch() takes a reference to an error handling function
        .catch(this.handleError);
  }

  private handleError(error: Response) {
    if (error.status === 400)
      return Observable.throw(new BadInput(error.json()));

    if (error.status === 404)
      // return an Observable object contains a specific error
      return Observable.throw(new NotFoundError());
    // return an Observable object contains a general error
    return Observable.throw(new AppError(error));
  }
}
