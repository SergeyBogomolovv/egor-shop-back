import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { PollsService } from './polls.service';
import { UserGuard } from 'src/auth/guards/user.guard';
import { CreatePollDto } from './dto/create-poll.dto';
import { AdminGuard } from 'src/auth/guards/admin.guard';

@Controller('polls')
export class PollsController {
  constructor(private readonly pollsService: PollsService) {}

  @UseGuards(AdminGuard)
  @UseGuards(UserGuard)
  @Post()
  create(@Body() dto: CreatePollDto) {
    return this.pollsService.create(dto);
  }

  @Get()
  findAll() {
    return this.pollsService.findAll();
  }

  @UseGuards(AdminGuard)
  @UseGuards(UserGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pollsService.remove(id);
  }
}
