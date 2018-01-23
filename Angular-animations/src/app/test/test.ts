import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { EventEmitter } from '@angular/core';
import { TestService } from './test.service';

export function compute(number) {
  if (number < 0)
    return 0;
  return number + 1;
}

export function greet(name) {
  return 'Welcome ' + name;
}

export function getCurrencies() {
  return ['USD', 'AUD', 'EUR'];
}

export class VoteComponent {
  totalVotes = 0;
  voteChanged = new EventEmitter();

  upVote() {
    this.totalVotes++;
    this.voteChanged.emit(this.totalVotes);
  }

  downVote() {
    this.totalVotes--;
  }
}


export class TodoFormComponent {
  form: FormGroup;

  constructor(fb: FormBuilder) {
    this.form = fb.group({
      name: ['', Validators.required],
      email: ['']
    });
  }
}


export class TestComponent { 
  tests: any[] = [];
  message; 

  constructor(private service: TestService) {}

  ngOnInit() { 
    this.service.getTests().subscribe(t => this.tests = t);
  }

  add() { 
    var newTest = { title: '... ' };
    this.service.add(newTest).subscribe(
      t => this.tests.push(t),
      err => this.message = err);
  }

  delete(id) {
    if (confirm('Are you sure?'))
      this.service.delete(id).subscribe();
  }  
}
