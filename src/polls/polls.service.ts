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
    console.log(dto);
    const poll = this.pollsRepository.create({
      title: dto.title,
      question1: dto.questions[0].question,
    });

    if (dto.questions.length > 1) {
      poll.question2 = dto.questions[1].question;
    }

    if (dto.questions.length > 2) {
      poll.question3 = dto.questions[2].question;
    }

    if (dto.questions.length > 3) {
      poll.question4 = dto.questions[3].question;
    }
    return this.pollsRepository.save(poll);
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
