import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  courses$;

  constructor(private db: AngularFireDatabase) {
    this.courses$ = db.list('/courses');
  }

  ngOnInit() {
  }

  add(course: HTMLInputElement) {
    this.courses$.push(course.value);
  }

  update(course) {
    this.db.object('/courses/' + course.$key)
      .set(course.$value + ' Updated');
  }

}
