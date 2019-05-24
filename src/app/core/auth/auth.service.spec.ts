import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([]),
      ],
    });
    service = TestBed.get(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have bruno is admin user', () => {
    expect(service.isAdmin('bruno')).toBeTruthy();
  });

  it('should have admin is admin user', () => {
    expect(service.isAdmin('admin')).toBeTruthy();
  });

  it('should have user is weak user', () => {
    expect(service.isAdmin('user')).toBeFalsy();
  });
});
