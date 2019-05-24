import { animate, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { fieldsCreator } from '../../utils/fields/fields.creator';
import { User } from '../../utils/user/user.interface';

@Component({
  selector: 'app-edit-user-modal',
  templateUrl: './edit-user-modal.component.html',
  styleUrls: ['./edit-user-modal.component.scss'],
  animations: [
    trigger('modal', [
      transition('void => *', [
        style({ transform: 'scale3d(.3, .3, .3)' }),
        animate(300),
      ]),
      transition(':leave', [
        animate(300, style({ transform: 'scale3d(.0, .0, .0)' })),
      ]),
    ]),
  ],
})
export class EditUserModalComponent implements OnInit, OnChanges {
  @Input() closable = true;
  @Input() visible: boolean;
  @Output() visibleChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() saveEditedUser: EventEmitter<User> = new EventEmitter();
  @Input() userToEdit: User;

  editForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {}

  private skeletonUser = (): User => ({
    id: null,
    name: '',
    cpf: '',
    login: '',
    password: '',
    email: '',
    profile: '',
  })

  ngOnChanges() {
    const { name, cpf, login, password, email, profile } = this.userToEdit || this.skeletonUser();
    const fields = fieldsCreator([
      { field: 'name', validators: [ Validators.required, Validators.minLength(5) ], value: name },
      {
        field: 'cpf',
        validators: [ Validators.required, Validators.pattern(/(\d{3})(\d{3})(\d{3})(\d{2})/g) ],
        value: cpf,
      },
      { field: 'login', validators: [ Validators.required ], value: login },
      { field: 'password', validators: [ Validators.required, Validators.minLength(8) ], value: password },
      { field: 'email', validators: [ Validators.required, Validators.email ], value: email },
      { field: 'profile', validators: [ Validators.required ], value: profile },
    ]);

    this.editForm = this.formBuilder.group(fields);
  }

  close() {
    this.visible = false;
    this.visibleChange.emit(this.visible);
  }

  saveUser() {
    this.saveEditedUser.emit({
      id: this.userToEdit.id,
      ...this.editForm.getRawValue(),
    });
  }
}
