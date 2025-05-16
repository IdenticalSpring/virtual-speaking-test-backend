import { User } from 'src/users/entities/user.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

export enum FeedbackType     { Bug = 'bug', FeatureRequest = 'feature_request', General = 'general_feedback' }
export enum FeedbackStatus   { Open = 'open', Closed = 'closed' }
export enum FeedbackPriority { High = 'high', Medium = 'medium', Low = 'low' }

@Entity()
export class Feedback {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => User, u => u.feedbacks, { eager: true })
  user: User;

  @Column('timestamp')
  date: Date;

  @Column({ type: 'enum', enum: FeedbackType })
  type: FeedbackType;

  @Column('text')
  message: string;

  @Column({ type: 'enum', enum: FeedbackStatus, default: FeedbackStatus.Open })
  status: FeedbackStatus;

  @Column({ type: 'enum', enum: FeedbackPriority, default: FeedbackPriority.Medium })
  priority: FeedbackPriority;
}
