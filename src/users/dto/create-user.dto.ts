import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ title: 'Имя пользователя' })
  name: string;
  @ApiProperty({ title: 'Пароль пользователя' })
  password: string;
}
