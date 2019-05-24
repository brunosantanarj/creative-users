import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';

import { AnchorModule } from '../components/anchor/anchor.module';
import { ButtonModule } from '../components/button/button.module';
import { InputModule } from '../components/input/input.module';
import { MaterialComponentsModule } from '../material-components/material-components.module';

import { SignupComponent } from './signup.component';

@NgModule({
  declarations: [ SignupComponent ],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot(),
    MaterialComponentsModule,
    AnchorModule,
    ButtonModule,
    ReactiveFormsModule,
    InputModule,
  ],
})
export class SignupModule {}
