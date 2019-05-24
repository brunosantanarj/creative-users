import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialComponentsModule } from '../../material-components/material-components.module';

import { ButtonComponent } from './button.component';

@NgModule({
  declarations: [ ButtonComponent ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
  ],
  exports: [ ButtonComponent ],
})
export class ButtonModule { }
