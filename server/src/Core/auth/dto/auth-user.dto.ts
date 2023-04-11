import { Role } from '../role.enum';

export class AuthUserDTO {
  id: string;
  email: string;
  ownerId: string;
  roles: Role[];
}
