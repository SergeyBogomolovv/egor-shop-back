import { Injectable } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Answer } from './entities/answer.entity';
import { Repository } from 'typeorm';
import { PollsService } from 'src/polls/polls.service';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AnswersService {
  constructor(
    @InjectRepository(Answer) private answerRepository: Repository<Answer>,
    private pollsService: PollsService,
    private usersService: UsersService,
  ) {}

  async create(dto: CreateAnswerDto, userId: number) {
    const user = await this.usersService.findOneById(userId);
    const poll = await this.pollsService.findOne(dto.pollId);
    poll.answered++;

    await this.pollsService.update(poll);

    const answer = this.answerRepository.create({
      ...dto,
      poll,
      user,
    });

    return this.answerRepository.save(answer);
  }

  findAll() {
    return this.answerRepository.find({ relations: ['poll', 'user'] });
  }

  findOne(id: string) {
    return this.answerRepository.find({ where: { id } });
  }

  remove(id: string) {
    return this.answerRepository.delete({ id });
  }
}
