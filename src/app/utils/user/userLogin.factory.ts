import { User } from './user.interface';

export const userLoginFactory = (profile: string) => (user: User) => ({
  ...user,
  profile,
});

