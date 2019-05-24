import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { NgxMaskModule } from 'ngx-mask';

import { AnchorModule } from '../components/anchor/anchor.module';
import { ButtonModule } from '../components/button/button.module';
import { InputModule } from '../components/input/input.module';
import { MaterialComponentsModule } from '../material-components/material-components.module';

import { SignupComponent } from './signup.component';

describe('SignupComponent', () => {
  let component: SignupComponent;
  let fixture: ComponentFixture<SignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SignupComponent ],
      imports: [
        CommonModule,
        RouterTestingModule.withRoutes([]),
        NgxMaskModule.forRoot(),
        BrowserAnimationsModule,
        MaterialComponentsModule,
        AnchorModule,
        ButtonModule,
        ReactiveFormsModule,
        InputModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
