import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialComponentsModule } from '../../material-components/material-components.module';

import { ButtonWithIconComponent } from './button-with-icon.component';

describe('ButtonWithIconComponent', () => {
  let component: ButtonWithIconComponent;
  let fixture: ComponentFixture<ButtonWithIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ButtonWithIconComponent,
      ],
      imports: [ MaterialComponentsModule ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonWithIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
