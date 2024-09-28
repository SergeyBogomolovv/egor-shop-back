import { ApiProperty } from '@nestjs/swagger';
import { UserRole } from 'src/users/entities/user.entity';

export class RegistrationDto {
  @ApiProperty({ title: 'Имя' })
  name: string;
  @ApiProperty({ title: 'Пароль' })
  password: string;

  @ApiProperty({ title: 'Роль', enum: UserRole })
  role: UserRole;
}
