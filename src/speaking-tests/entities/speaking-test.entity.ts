import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class SpeakingTest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, u => u.tests, { eager: true })
  user: User;

  @Column('timestamp')
  testDate: Date;

  @Column('int') overallScore: number;
  @Column('int') pronunciation: number;
  @Column('int') fluency: number;
  @Column('int') accuracy: number;

  @Column('text') feedback: string;
  @Column('simple-json')
  details: { word: string; score: number; feedback: string }[];
}
