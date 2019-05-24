import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

import { User } from '../../utils/user/user.interface';
import { UserDAO } from '../../utils/user/userDAO';
import { userLoginFactory } from '../../utils/user/userLogin.factory';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user$ = new BehaviorSubject(null);

  constructor(
    private router: Router,
    private userDAO: UserDAO,
  ) { }

  private login(userLogin: User) {
    this.userDAO.login(userLogin);
  }

  isAdmin = (login: string) =>
    login.toLocaleLowerCase() === 'bruno' || login.toLocaleLowerCase() === 'admin'

  getUser = (): User => this.userDAO.getLoggedUser();

  private logUserAndNavigate = (profile, data) => {
    this.login(userLoginFactory(profile)(data));
    this.user$.next(this.userDAO.getLoggedUser());
    this.router.navigate(['usuarios']);
  }

  authenticateWithLogin(data: User) {
    if (this.isAdmin(data.login)) {
      this.logUserAndNavigate('admin', data);
      return;
    }

    this.logUserAndNavigate('user', data);
  }

  logout() {
    this.userDAO.logout();
    this.user$.next(null);
  }

  loggedUser = () => this.user$.asObservable();
}
