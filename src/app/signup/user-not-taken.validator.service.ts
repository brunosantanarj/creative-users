import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { debounceTime, first, map, switchMap } from 'rxjs/operators';

import { SignupService } from './signup.service';

@Injectable({ providedIn: 'root' })
export class UserNotTakenValidatorService {

  constructor(private signUpService: SignupService) {}

  checkLoginTaken = () => (control: AbstractControl) => control.valueChanges
    .pipe(debounceTime(300))
    .pipe(switchMap(this.signUpService.checkLoginTaken))
    .pipe(map(isTaken => isTaken ? { loginTaken: true } : null))
    .pipe(first())
}
