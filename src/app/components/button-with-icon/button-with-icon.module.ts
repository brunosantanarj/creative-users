import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialComponentsModule } from '../../material-components/material-components.module';

import { ButtonWithIconComponent } from './button-with-icon.component';

@NgModule({
  declarations: [ ButtonWithIconComponent ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
  ],
  exports: [ ButtonWithIconComponent ],
})
export class ButtonWithIconModule { }
