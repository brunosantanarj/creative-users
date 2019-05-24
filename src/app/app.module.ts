import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './components/container/container.component';
import { LogoComponent } from './components/logo/logo.component';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { SigninModule } from './signin/signin.module';
import { SignupModule } from './signup/signup.module';
import { UsersModule } from './users/users.module';

import { ButtonWithIconModule } from './components/button-with-icon/button-with-icon.module';
import { HeaderModule } from './components/header/header.module';

import { OnlyLoggedDirective } from './core/only-logged/only-logged.directive';

@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    LogoComponent,
    OnlyLoggedDirective,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialComponentsModule,
    SigninModule,
    SignupModule,
    UsersModule,
    HeaderModule,
    ButtonWithIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
