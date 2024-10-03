import { Poll } from 'src/polls/entities/poll.entity';
import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Answer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  answer1: string;

  @Column({ nullable: true })
  answer2?: string;

  @Column({ nullable: true })
  answer3?: string;

  @Column({ nullable: true })
  answer4?: string;

  @Column()
  email: string;

  @ManyToOne(() => Poll, (poll) => poll.answers, {
    cascade: true,
    onDelete: 'CASCADE',
  })
  poll: Poll;

  @ManyToOne(() => User, (user) => user.answers)
  user: User;
}
