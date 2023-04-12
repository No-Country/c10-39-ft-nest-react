import type User from './User.type';

export interface AppUser {
  user: {
    user: User;
  };
}

export interface AppSportNames {
  sportNames: {
    sportNames: string[];
  };
}
