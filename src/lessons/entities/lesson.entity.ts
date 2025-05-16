import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Lesson {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  level: string;

  @Column()
  description: string;

  @Column({ default: true })
  active: boolean;

  @Column()
  chapter: number;

  @Column()
  unit: number;
}
