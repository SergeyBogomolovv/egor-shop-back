import { ApiProperty } from '@nestjs/swagger';

export class RegistrationDto {
  @ApiProperty({ title: 'Имя' })
  name: string;
  @ApiProperty({ title: 'Пароль' })
  password: string;
}
