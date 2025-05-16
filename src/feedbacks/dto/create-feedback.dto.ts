import { IsUUID, IsDateString, IsEnum, IsNotEmpty } from 'class-validator';
import { FeedbackPriority, FeedbackStatus, FeedbackType } from '../entities/feedback.entity';

export class CreateFeedbackDto {
  @IsUUID()        userId: string;
  @IsDateString()  date: string;
  @IsEnum(FeedbackType)     type: FeedbackType;
  @IsNotEmpty()    message: string;
  @IsEnum(FeedbackStatus)   status: FeedbackStatus;
  @IsEnum(FeedbackPriority) priority: FeedbackPriority;
}
