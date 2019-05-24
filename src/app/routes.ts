import { Routes } from '@angular/router';

import { AuthGuard } from './core/auth/auth.guard';
import { OnlyAdminGuard } from './core/only-admin/only-admin.guard';
import { OnlyLoggedGuard } from './core/only-logged/only-logged.guard';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';

export const routes: Routes = [
  {
    path: '',
    component: SigninComponent,
    canActivate: [ AuthGuard ],
  },
  {
    path: 'usuarios',
    component: UsersComponent,
    canActivate: [ OnlyLoggedGuard ],
  },
  {
    path: 'cadastrar',
    component: SignupComponent,
    canActivate: [ OnlyLoggedGuard, OnlyAdminGuard ],
  },
];
