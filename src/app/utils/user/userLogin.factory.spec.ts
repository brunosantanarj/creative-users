import { userLoginFactory } from './userLogin.factory';

describe('UserLoginFactory', () => {
  const data = {
    login: 'bruno',
    password: 'testeteste',
  };

  it('should have admin user', () => {
    const adminUser = userLoginFactory('admin')(data);
    expect(adminUser.profile).toEqual('admin');
  });

  it('should have weak user', () => {
    const adminUser = userLoginFactory('user')(data);
    expect(adminUser.profile).toEqual('user');
  });
});
