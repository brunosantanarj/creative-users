import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonModule } from '../components/button/button.module';
import { InputModule } from '../components/input/input.module';
import { MaterialComponentsModule } from '../material-components/material-components.module';

import { SigninComponent } from './signin.component';

@NgModule({
  declarations: [ SigninComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialComponentsModule,
    ButtonModule,
    InputModule,
  ],
})
export class SigninModule {}
