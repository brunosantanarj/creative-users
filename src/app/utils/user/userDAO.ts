import { Injectable } from '@angular/core';

import { User } from './user.interface';

@Injectable({ providedIn: 'root' })
export class UserDAO {
  constructor() {}

  login(user: User) {
    localStorage.setItem('logged-user', JSON.stringify(user));
  }

  getLoggedUser = () => JSON.parse(localStorage.getItem('logged-user'));

  users = () => JSON.parse(localStorage.getItem('users')) || [];

  createUser = (user: User) => localStorage.setItem('users', JSON.stringify([
    ...this.users(),
    user,
  ]))

  removeUser = (id: number) => localStorage.setItem('users', JSON.stringify([
    ...this.users()
      .filter(user => user.id !== id),
  ]))

  editUser = (user: User) => localStorage.setItem('users', JSON.stringify([
    ...this.users()
      .map(usr => (usr.id === user.id) ? {
        id: user.id,
        login: user.login,
        password: user.password,
        profile: user.profile,
        name: user.name,
        email: user.email,
        cpf: user.cpf,
      } : usr),
  ]))

  logout() {
    localStorage.removeItem('logged-user');
  }
}
