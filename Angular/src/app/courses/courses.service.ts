import { Injectable } from '@angular/core';

@Injectable()
export class CoursesService {
  getCourses() {
    return [
      { id: 1, name: 'course1'},
      { id: 2, name: 'course2'},
      { id: 3, name: 'course3'}
    ];
  }
}
