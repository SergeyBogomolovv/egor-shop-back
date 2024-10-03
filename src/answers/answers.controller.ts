import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AnswersService } from './answers.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { AdminGuard } from 'src/auth/guards/admin.guard';
import { UserGuard } from 'src/auth/guards/user.guard';
import { CurrentUser } from 'src/auth/decorators/current-user.decorator';

@Controller('answers')
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {}

  @UseGuards(UserGuard)
  @Post()
  create(
    @Body() createAnswerDto: CreateAnswerDto,
    @CurrentUser('id') userId: string,
  ) {
    return this.answersService.create(createAnswerDto, +userId);
  }

  @UseGuards(AdminGuard)
  @Get()
  findAll() {
    return this.answersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.answersService.findOne(id);
  }

  @UseGuards(AdminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.answersService.remove(id);
  }
}
