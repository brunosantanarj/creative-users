import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { MaterialComponentsModule } from '../../material-components/material-components.module';

import { AnchorComponent } from './anchor.component';

@NgModule({
  declarations: [ AnchorComponent ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialComponentsModule,
  ],
  exports: [ AnchorComponent ],
})
export class AnchorModule { }
