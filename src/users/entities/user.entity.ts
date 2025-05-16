import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Feedback } from 'src/feedbacks/entities/feedback.entity';
import { SpeakingTest } from 'src/speaking-tests/entities/speaking-test.entity';

export enum UserRole   { Admin = 'admin', Student = 'student' }
export enum UserStatus { Active = 'active', Inactive = 'inactive' }
export enum UserLevel  { L1 = '1', L2 = '2', L3 = '3', L4 = '4' }

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  phone: string;

  // <-- was `status` but should be `role`
  @Column({ type: 'enum', enum: UserRole, default: UserRole.Student })
  role: UserRole;

  @Column({ type: 'enum', enum: UserStatus, default: UserStatus.Active })
  status: UserStatus;

  @Column({ type: 'enum', enum: UserLevel, default: UserLevel.L1 })
  level: UserLevel;

  @OneToMany(() => Feedback,     f => f.user)
  feedbacks: Feedback[];

  @OneToMany(() => SpeakingTest, t => t.user)
  tests: SpeakingTest[];
}