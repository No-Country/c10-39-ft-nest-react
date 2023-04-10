interface User {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

interface Owner extends User {
  ownerFields: {
    DNI: string;
    address: string;
    phone: string;
  };
}

export interface UsersSeed {
  noOwners: User[];
  owners: Owner[];
}

export const usersData: UsersSeed = {
  noOwners: [
    {
      email: 'userNoOwner@gmail.com',
      password: 'test1234',
      firstName: 'noOwner',
      lastName: 'noOwner',
    },
  ],
  owners: [
    {
      email: 'userOwner@gmail.com',
      password: 'test1234',
      firstName: 'owner',
      lastName: 'owner',
      ownerFields: {
        DNI: '34243242',
        address: 'cabildo 2234',
        phone: '555533333',
      },
    },
  ],
};
