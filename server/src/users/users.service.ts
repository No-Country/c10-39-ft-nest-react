import { BadRequestException, Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import * as bcrypt from "bcrypt";
import * as jwt from "jsonwebtoken";
import { LoginUserDTO, RegisterUserDTO } from "./dto/register-dto";
import { UpdateUserDTO } from "./dto/update-user.dto";
import User from "./entities/user.entity";
import { SALT } from "src/Core/Constants";
import { EXPIRED_TOKEN } from "src/Core/Constants/constants";
import { ConfigService } from "@nestjs/config";

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly configService: ConfigService
  ) {}

  async register(
    registerUserDTO: RegisterUserDTO
  ): Promise<{ user: User; token: string }> {
    const hashedPassword = bcrypt.hashSync(registerUserDTO.password, SALT);
    const existingUser = await this.findByEmail(registerUserDTO.email);

    if (existingUser) {
      throw new BadRequestException('Email already registered');
    }


    const user: User = this.userRepository.create({
      ...registerUserDTO,
      password: hashedPassword,
      isActive: true,
    });
    await this.userRepository.save(user);
    const token: string = await this.generateToken(user);

    return { user, token };
  }

  async login(
    loginUserDTO: LoginUserDTO
  ): Promise<{ user: User; token: string }> {
    const { email, password } = loginUserDTO;
    const user = await this.findByEmail(email);

    if (!user || !bcrypt.compareSync(password, user.password))
      throw new UnauthorizedException();

    const token: string = await this.generateToken(user);
    return { user, token };
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: string) {
    return this.userRepository.findOne({
      where: { id },
    });
  }


  /// aca falta terminar el update 
  async update(
    id: string,
    updateUserDTO: UpdateUserDTO
  ): Promise<User> { // Promise<{user:User, token:string}>
    const hashedPassword = bcrypt.hashSync(updateUserDTO.password, SALT);
    console.log(id);

    const user = await this.userRepository.update(id, updateUserDTO);
    // await this.userRepository.save(user);
    // const token : string = await this.generateToken(user);
    console.log(user);

    return new User();
  }

  async delete(id: string) {
    return this.userRepository.delete(id);
  }

  private async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepository.findOne({ where: { email } });
  }
  private async generateToken(user: User) {
    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      this.configService.get<string>("JWT_SECRET"),
      { expiresIn: EXPIRED_TOKEN }
    );
    return token;
  }
}
