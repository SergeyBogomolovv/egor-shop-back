import { Answer } from 'src/answers/entities/answer.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

export enum UserRole {
  USER = 'user',
  ADMIN = 'admin',
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  name: string;

  @Column()
  password: string;

  @Column({ default: UserRole.USER })
  role: UserRole;

  @OneToMany(() => Answer, (answer) => answer.user)
  answers: Answer[];
}
