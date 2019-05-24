import { Component, OnInit } from '@angular/core';

import { User } from '../utils/user/user.interface';
import { UserDAO } from '../utils/user/userDAO';

import { UsersService } from './users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss' ],
})
export class UsersComponent implements OnInit {
  users: any;
  showModal = false;
  userToEdit: User;

  constructor(
    private userDAO: UserDAO,
    private usersService: UsersService,
  ) { }

  ngOnInit() {
    this.users = this.userDAO.users();
  }

  private updateUsers = () => this.users = this.userDAO.users();

  removeUser(id) {
    this.usersService.removeUser(id);
    this.updateUsers();
  }

  toggleModalOnEditUser(user) {
    this.showModal = !this.showModal;
    this.userToEdit = user;
  }

  saveEditedUser(user: User) {
    this.usersService.editUser(user);
    this.updateUsers();
    this.showModal = !this.showModal;
  }
}
