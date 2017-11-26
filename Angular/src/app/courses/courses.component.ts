import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent{

  title = 'List of courses';
  courses;
  imgUrl = 'http://lorempixel.com/400/200';
  colSpan = 2;
  isActive = true;
  email = 'me@example.com';
  text = 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry stand';
  movieTitle = '';
    course = {
      title: 'The Complete Angular Course',
      rating: 3.1415926,
      students: 30123,
      price: 120.12,
      relaseDate: new Date(2017, 10, 1)
  }

  // service: CoursesService means let Angular create an instance of CoursesService
  // equivalent to let service = new CoursesService();
  constructor(private service: CoursesService) {
      this.courses = service.getCourses();
  }
  // note: this Courses depends on CoursesService.
  // this concept is called depency injection
  // Angular injects a dependency into a component's constructor

  onSave($event) {
      // stopPropagation will disable all other (click) bindings from
      // this component's parents, e.g. onDivClicked()
      $event.stopPropagation();
      console.log('Button was clicked', $event);
  }

  onDivClicked() {
      console.log('Div was clicked');
  }

  onKeyUp() {
      console.log(this.email);
  }

  onAdd() {
    this.courses.push({id: 4, name: 'course4'})
  }

  onRemove(course) {
    const index = this.courses.indexOf(course);
    // remove item by index
    this.courses.splice(index, 1)
  }

  trackCourse(index, course) {
    // if course is given, then use it
    // otherwise return undefined
    return course ? course.id : undefined;
  }

  loadCourses() {
    this.courses = this.service.getCourses();
  }
}
