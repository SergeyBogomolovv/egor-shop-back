import { Module } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { AnswersController } from './answers.controller';
import { PollsModule } from 'src/polls/polls.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from './entities/answer.entity';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [PollsModule, TypeOrmModule.forFeature([Answer]), UsersModule],
  controllers: [AnswersController],
  providers: [AnswersService],
})
export class AnswersModule {}
