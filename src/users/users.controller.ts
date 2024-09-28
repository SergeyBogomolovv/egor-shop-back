import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';
import { UserGuard } from 'src/auth/guards/user.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(UserGuard)
  @Get('me')
  getMe(@CurrentUser('id') id: string) {
    return this.usersService.findOneById(+id);
  }
}
