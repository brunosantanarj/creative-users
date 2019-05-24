import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule } from 'ngx-mask';

import { MaterialComponentsModule } from '../../material-components/material-components.module';
import { ButtonWithIconModule } from '../button-with-icon/button-with-icon.module';
import { ButtonModule } from '../button/button.module';
import { InputModule } from '../input/input.module';

import { EditUserModalComponent } from './edit-user-modal.component';

@NgModule({
  declarations: [ EditUserModalComponent ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    NgxMaskModule.forRoot(),
    InputModule,
    ButtonModule,
    ReactiveFormsModule,
    MaterialComponentsModule,
    ButtonWithIconModule,
  ],
  exports: [ EditUserModalComponent ],
})
export class EditUserModalModule { }
