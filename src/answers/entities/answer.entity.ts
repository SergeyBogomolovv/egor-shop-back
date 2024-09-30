import { Poll } from 'src/polls/entities/poll.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Answer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  answer: string;

  @ManyToOne(() => Poll, (poll) => poll.anwers, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  poll: Poll;
}
