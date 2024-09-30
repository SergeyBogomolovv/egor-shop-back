import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Ticket {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ nullable: true })
  imageUrl?: string;

  @Column()
  description: string;

  @Column()
  price: string;
}
