import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { fieldsCreator } from '../utils/fields/fields.creator';

import { SignupService } from './signup.service';
import { UserNotTakenValidatorService } from './user-not-taken.validator.service';

@Component({
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss' ],
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userNotTakenValidatorService: UserNotTakenValidatorService,
    private signupService: SignupService,
    private router: Router,
  ) { }


  ngOnInit() {
    const fields = fieldsCreator([
      { field: 'name', validators: [ Validators.required, Validators.minLength(5) ] },
      { field: 'cpf', validators: [ Validators.required, Validators.pattern(/(\d{3})(\d{3})(\d{3})(\d{2})/g) ] },
      { field: 'login', validators: [ Validators.required ], asyncValidators: this.userNotTakenValidatorService.checkLoginTaken() },
      { field: 'password', validators: [ Validators.required, Validators.minLength(8) ] },
      { field: 'email', validators: [ Validators.required, Validators.email ] },
      { field: 'profile', validators: [ Validators.required ] },
    ]);

    this.signupForm = this.formBuilder.group(fields);
  }

  createUser() {
    this.signupService.createUser({
      id: Math.floor(Math.random() * 10000) + 1,
      ...this.signupForm.getRawValue(),
    });
    this.router.navigate(['usuarios' ]);
  }
}
