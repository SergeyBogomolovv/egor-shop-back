import { Module } from '@nestjs/common';
import { PollsService } from './polls.service';
import { PollsController } from './polls.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Poll } from './entities/poll.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Poll])],
  controllers: [PollsController],
  providers: [PollsService],
  exports: [PollsService, TypeOrmModule],
})
export class PollsModule {}
