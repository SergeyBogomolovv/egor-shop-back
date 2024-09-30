import { Module } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { AnswersController } from './answers.controller';
import { PollsModule } from 'src/polls/polls.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Answer } from './entities/answer.entity';

@Module({
  imports: [PollsModule, TypeOrmModule.forFeature([Answer])],
  controllers: [AnswersController],
  providers: [AnswersService],
})
export class AnswersModule {}
