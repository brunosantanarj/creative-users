import { async, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { ButtonWithIconModule } from './components/button-with-icon/button-with-icon.module';
import { ContainerComponent } from './components/container/container.component';
import { HeaderModule } from './components/header/header.module';
import { LogoComponent } from './components/logo/logo.component';
import { MaterialComponentsModule } from './material-components/material-components.module';
import { SigninModule } from './signin/signin.module';
import { SignupModule } from './signup/signup.module';
import { UsersModule } from './users/users.module';

import { OnlyLoggedDirective } from './core/only-logged/only-logged.directive';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserAnimationsModule,
        MaterialComponentsModule,
        SigninModule,
        SignupModule,
        UsersModule,
        HeaderModule,
        ButtonWithIconModule,
      ],
      declarations: [
        AppComponent,
        ContainerComponent,
        LogoComponent,
        OnlyLoggedDirective,
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title in a h1 tag', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Creative users');
  });
});
