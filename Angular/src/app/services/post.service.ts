import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { DataService } from './data.service'


@Injectable()
export class PostService extends DataService {

  // in order to create an instance of PostService
  // its parent must be created using super
  constructor(http: Http) { 
    super('https://jsonplaceholder.typicode.com/posts', http);
  }

}
