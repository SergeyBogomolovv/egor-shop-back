import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { hash, compare, genSalt } from 'bcrypt';
import { RegistrationDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@Injectable()
export class AuthService {
  constructor(private readonly usersService: UsersService) {}
  async registration(dto: RegistrationDto) {
    const isUserExists = await this.usersService.findOneByName(dto.name);
    if (isUserExists) {
      throw new BadRequestException(
        'пользователь с таким именем уже существует',
      );
    }
    const salt = await genSalt();
    const hashedPassword = await hash(dto.password, salt);
    return await this.usersService.create({
      name: dto.name,
      password: hashedPassword,
    });
  }

  async login(dto: LoginDto) {
    const dbUser = await this.usersService.findOneByName(dto.name);
    if (!dbUser) throw new UnauthorizedException('Данные неверны');
    const isPassword = await compare(dto.password, dbUser.password);
    if (!isPassword) throw new UnauthorizedException('Данные неверны');
    return dbUser;
  }
}
