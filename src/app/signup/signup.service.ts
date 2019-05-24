import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { UserDAO } from '../utils/user/userDAO';

@Injectable({ providedIn: 'root' })
export class SignupService {
  subject = new BehaviorSubject(null);

  constructor(
    private userDAO: UserDAO,
  ) {}

  checkLoginTaken = (login) => {
    const users = this.userDAO.users();
    if (users.length) {
      const isTaken = users
        .map(e => ({ login: e.login }))
        .some(e => e.login === login);

      this.subject.next(isTaken);
    }

    return this.subject.asObservable();
  }


  createUser = (users) => this.userDAO.createUser(users);
}
