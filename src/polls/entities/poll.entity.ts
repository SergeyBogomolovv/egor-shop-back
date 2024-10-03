import { Answer } from 'src/answers/entities/answer.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Poll {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  question1: string;

  @Column({ nullable: true })
  question2?: string;

  @Column({ nullable: true })
  question3?: string;

  @Column({ nullable: true })
  question4?: string;

  @Column({ type: 'integer', default: 0 })
  answered: number;

  @OneToMany(() => Answer, (answer) => answer.poll)
  answers: Answer[];
}
