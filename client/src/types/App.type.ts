import ComplexType from './Complex.type';
import { searchType } from './Search.type';
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
export interface AppComplex {
  complex: {
    complex: ComplexType;
  };
}
export interface AppSearch {
  search: {
    search: searchType;
  };
}
