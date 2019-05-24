import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { AnchorModule } from '../components/anchor/anchor.module';
import { ButtonWithIconModule } from '../components/button-with-icon/button-with-icon.module';
import { ButtonModule } from '../components/button/button.module';
import { CardsModule } from '../components/cards/cards.module';
import { EditUserModalModule } from '../components/edit-user-modal/edit-user-modal.module';
import { AuthService } from '../core/auth/auth.service';
import { MaterialComponentsModule } from '../material-components/material-components.module';

import { UsersComponent } from './users.component';

describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsersComponent ],
      imports: [
        RouterModule,
        MaterialComponentsModule,
        CardsModule,
        ButtonModule,
        AnchorModule,
        ReactiveFormsModule,
        ButtonWithIconModule,
        EditUserModalModule,
        RouterTestingModule.withRoutes([]),
      ],
      providers: [ AuthService ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
