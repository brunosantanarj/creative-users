import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialComponentsModule } from '../../material-components/material-components.module';

import { CardsComponent } from './cards.component';

@NgModule({
  declarations: [ CardsComponent ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialComponentsModule,
  ],
  exports: [ CardsComponent ],
})
export class CardsModule { }
