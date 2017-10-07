import { UsernameValidators } from './username.validators';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {

  myForm = new FormGroup({

    // parameters of FormConotrol
    // first: the initial value of the input
    // second: validator functions in a array if more than one
    // third: AJAX validators
    username: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      UsernameValidators.cannotContainSpace
      ], 
      UsernameValidators.shouldBeUnique
    ),
    password: new FormControl('', Validators.required)
  });

  // optional: group a few input fields by form group
  // myForm = new FormGroup({
  //   account: new FormGroup({
  //     username: new FormControl(''),
  //     password: nwe FormControl('')
  //   });
  // })

  get username() {
    return this.myForm.get('username');
  }
  
  login() {
    this.myForm.setErrors({
      invalidLogin: true
    });
  }
}
