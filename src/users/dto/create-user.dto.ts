import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from '../entities/user.entity';

export class CreateUserDto {
  @ApiProperty({ title: 'Имя пользователя' })
  name: string;

  @ApiProperty({ title: 'Пароль пользователя' })
  password: string;

  @ApiProperty({ title: 'Роль пользователя' })
  role: UserRole;
}
