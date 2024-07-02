import { Body, Controller } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { RegistrationDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';

@ApiTags('Авторизация')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @ApiOperation({ summary: 'регистрация' })
  register(@Body() dto: RegistrationDto) {
    return this.authService.registration(dto);
  }

  @ApiOperation({ summary: 'вход' })
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto);
  }
}
