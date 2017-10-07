import { PasswordValidators } from './password.validators';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.css']
})
export class ChangePasswordComponent {
  myForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    // parameters of formBuilder.group()
    // first: { name of forn control: ['initial value', validators] }
    // second: extra validator for more than one input fileds
    this.myForm = formBuilder.group({
      oldPassword: [
        '', 
        Validators.required, 
        PasswordValidators.validOldPassword
      ],
      newPassword: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
      validator: PasswordValidators.passwordShouldMatch
    });
  }

  get oldPassword() {
    return this.myForm.get('oldPassword');
  }

  get newPassword() {
    return this.myForm.get('newPassword');
  }

  get confirmPassword() {
    return this.myForm.get('confirmPassword');
  }

}
