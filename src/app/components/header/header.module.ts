import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MaterialComponentsModule } from '../../material-components/material-components.module';
import { ButtonWithIconModule } from '../button-with-icon/button-with-icon.module';

import { HeaderComponent } from './header.component';

@NgModule({
  declarations: [ HeaderComponent ],
  imports: [
    CommonModule,
    MaterialComponentsModule,
    ButtonWithIconModule,
  ],
  exports: [ HeaderComponent ],
})
export class HeaderModule { }
