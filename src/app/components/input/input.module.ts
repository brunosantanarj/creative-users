import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialComponentsModule } from '../../material-components/material-components.module';

import { InputComponent } from './input.component';

@NgModule({
  declarations: [ InputComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialComponentsModule,
  ],
  exports: [ InputComponent ],
})
export class InputModule { }
