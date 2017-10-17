import { FormGroup, FormArray, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'new-course-form',
  templateUrl: './new-course-form.component.html',
  styleUrls: ['./new-course-form.component.css']
})
export class NewCourseFormComponent {
  // build a form using formBuilder and new FormGroup are equivalent
  // constructor(formBuilder: FormBuilder) {
  //   this.myForm = formBuilder.group({
  //     name: ['', Validators.required],
  //     contact: formBuilder.group({
  //       email: [],
  //       phone: []
  //     }),
  //     topics: formBuilder.array([])
  //   })
  // }

  myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl
    }),
    topics: new FormArray([])
  });

  categories = [
    {id: 1, name: 'Development'},
    {id: 2, name: 'Art'},
    {id: 3, name: 'Languages'}
  ];

  // add a new topic
  addTopic(topic: HTMLInputElement) {
    this.topics.push(new FormControl(topic.value));
    topic.value = '';
  }

  // remove a given topic
  removeTopic(topic: FormControl) {
    const index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    return this.myForm.get('topics') as FormArray;
  }
}
