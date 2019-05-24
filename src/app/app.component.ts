import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from './core/auth/auth.service';
import { User } from './utils/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ],
})
export class AppComponent implements OnInit {
  user$: Observable<User>;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.user$ = this.authService.loggedUser();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['']);
  }
}
