import { Injectable } from '@nestjs/common';
import { CreatePollDto } from './dto/create-poll.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Poll } from './entities/poll.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PollsService {
  constructor(
    @InjectRepository(Poll) private pollsRepository: Repository<Poll>,
  ) {}
  create(dto: CreatePollDto) {
    return this.pollsRepository.save(this.pollsRepository.create(dto));
  }

  findAll() {
    return this.pollsRepository.find();
  }

  update(poll: Poll) {
    return this.pollsRepository.save(poll);
  }

  findOne(id: string) {
    return this.pollsRepository.findOne({ where: { id } });
  }

  remove(id: string) {
    return this.pollsRepository.delete({ id });
  }
}
