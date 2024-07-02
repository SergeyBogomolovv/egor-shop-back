import { ApiProperty } from '@nestjs/swagger';

export class LoginDto {
  @ApiProperty({ title: 'Имя' })
  name: string;
  @ApiProperty({ title: 'Пароль' })
  password: string;
}
