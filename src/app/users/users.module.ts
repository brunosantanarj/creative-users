import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AnchorModule } from '../components/anchor/anchor.module';
import { ButtonWithIconModule } from '../components/button-with-icon/button-with-icon.module';
import { ButtonModule } from '../components/button/button.module';
import { CardsModule } from '../components/cards/cards.module';
import { EditUserModalModule } from '../components/edit-user-modal/edit-user-modal.module';
import { OnlyAdminDirective } from '../core/only-admin/only-admin.directive';
import { MaterialComponentsModule } from '../material-components/material-components.module';

import { UsersComponent } from './users.component';

@NgModule({
  declarations: [
    UsersComponent,
    OnlyAdminDirective,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialComponentsModule,
    CardsModule,
    ButtonModule,
    AnchorModule,
    ReactiveFormsModule,
    EditUserModalModule,
    ButtonWithIconModule,
  ],
})
export class UsersModule {}
