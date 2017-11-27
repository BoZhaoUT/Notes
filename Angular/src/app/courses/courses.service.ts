import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Subscription } from 'rxjs/Subscription';

@Injectable()
export class CoursesService {
  // by convention, variable ending with $ is an observable
  courses$;
  course$;

  // courses: any[];
  // subscription: Subscription;

  constructor(db: AngularFireDatabase) {
    this.courses$ = db.list('/courses');
    this.course$ = db.object('/courses/1');
  }

  // async pipe will automatically unwrap subscrible
  // it will also unsubscripble when this component is destroyed
  // <ul>
  //   <li *ngFor="let course of courses$ | async">
  //     {{ course.$value }}
  //   </li>
  // </ul>

  getCourses() {
    return [
      { id: 1, name: 'course1'},
      { id: 2, name: 'course2'},
      { id: 3, name: 'course3'}
    ];
  }
}
