import { Injectable } from '@nestjs/common';
import { CreateTicketDto } from './dto/create-ticket.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Ticket } from './entities/ticket.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TicketsService {
  constructor(
    @InjectRepository(Ticket) private ticketRepository: Repository<Ticket>,
  ) {}
  create(createTicketDto: CreateTicketDto) {
    return this.ticketRepository.save(
      this.ticketRepository.create(createTicketDto),
    );
  }

  findAll() {
    return this.ticketRepository.find();
  }

  remove(id: string) {
    return this.ticketRepository.delete({ id });
  }
}
