import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly usersRepository: Repository<User>,
  ) {}
  async create(dto: CreateUserDto) {
    const user = this.usersRepository.create(dto);
    return this.usersRepository.save(user);
  }
  async update(id: number, dto: UpdateUserDto) {
    const user = await this.usersRepository.findOneBy({ id });
    return this.usersRepository.save({ ...user, dto });
  }
  async findOneById(id: number) {
    return this.usersRepository.findOneBy({ id });
  }
  async findOneByName(name: string) {
    return this.usersRepository.findOneBy({ name });
  }
}
