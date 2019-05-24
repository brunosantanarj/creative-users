import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialComponentsModule } from '../../material-components/material-components.module';
import { ButtonWithIconModule } from '../button-with-icon/button-with-icon.module';
import { ButtonModule } from '../button/button.module';
import { InputModule } from '../input/input.module';

import { EditUserModalComponent } from './edit-user-modal.component';

describe('EditUserModalComponent', () => {
  let component: EditUserModalComponent;
  let fixture: ComponentFixture<EditUserModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditUserModalComponent ],
      imports: [
        ReactiveFormsModule,
        ButtonModule,
        InputModule,
        ButtonWithIconModule,
        MaterialComponentsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditUserModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
