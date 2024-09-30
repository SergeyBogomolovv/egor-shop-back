import { Answer } from 'src/answers/entities/answer.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';

@Entity()
export class Poll {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  question: string;

  @Column({ type: 'integer', default: 0 })
  answered: number;

  @OneToMany(() => Answer, (answer) => answer.poll)
  anwers: Answer[];
}
