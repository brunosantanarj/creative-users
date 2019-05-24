import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { fieldsCreator } from '../utils/fields/fields.creator';

import { AuthService } from '../core/auth/auth.service';
import { FieldsErrorStateMatcher } from '../core/fields-error-state-matcher/fields-error-state-matcher.helper';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss' ],
})
export class SigninComponent implements OnInit {
  signinForm: FormGroup;
  matcher = new FieldsErrorStateMatcher();

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
  ) { }

  ngOnInit() {
    const fields = fieldsCreator([
      { field: 'login', validators: [ Validators.required ]},
      { field: 'password', validators: [ Validators.required, Validators.minLength(8) ]},
    ]);
    this.signinForm = this.formBuilder.group(fields);
  }

  onSubmit() {
    this.authService.authenticateWithLogin(this.signinForm.getRawValue());
  }
}
