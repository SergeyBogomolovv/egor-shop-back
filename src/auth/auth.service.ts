import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { hash, compare, genSalt } from 'bcrypt';
import { RegistrationDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { UserRole } from 'src/users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async registration(dto: RegistrationDto) {
    const isUserExists = await this.usersService.findOneByName(dto.name);
    if (isUserExists) {
      throw new BadRequestException(
        'пользователь с таким именем уже существует',
      );
    }
    const salt = await genSalt();
    const hashedPassword = await hash(dto.password, salt);

    await this.usersService.create({
      name: dto.name,
      password: hashedPassword,
      role: UserRole.USER,
    });

    return { message: 'Пользователь зарегистрирован' };
  }

  async login(dto: LoginDto) {
    const user = await this.usersService.findOneByName(dto.name);
    if (!user) throw new UnauthorizedException('Данные неверны');
    const isPassword = await compare(dto.password, user.password);
    if (!isPassword) throw new UnauthorizedException('Данные неверны');

    const payload = { role: user.role, id: user.id };

    return {
      token: this.jwtService.sign(payload),
    };
  }
}
