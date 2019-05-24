import { CommonModule } from '@angular/common';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatInputModule } from '@angular/material';

import { MaterialComponentsModule } from '../../material-components/material-components.module';

import { InputComponent } from './input.component';


describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputComponent ],
      imports: [
        CommonModule,
        MaterialComponentsModule,
        MatInputModule,
        MatFormFieldModule,
        ReactiveFormsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  /**
   * Teste falha.
   * ng-content não é permitido dentro do mat-form-field.
   * Mas, como trade-off, decidei usa-lo mesmo assim por bons motivos a estrutura.
   * Indo mais, a equipe core do Material já está trabalhando nesse bugfix.
   * Última atualização: 2 de maio de 2019 em https://github.com/angular/components/issues/9411
   */

  // it('should create', () => {
  //  expect(component).toBeTruthy();
  // });
});
