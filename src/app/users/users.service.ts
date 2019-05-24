import { Injectable } from '@angular/core';

import { User } from '../utils/user/user.interface';
import { UserDAO } from '../utils/user/userDAO';

@Injectable({ providedIn: 'root' })
export class UsersService {
  constructor(private userDAO: UserDAO) {}

  removeUser(id: number) {
    this.userDAO.removeUser(id);
  }

  editUser(user: User) {
    this.userDAO.editUser(user);
  }
}
