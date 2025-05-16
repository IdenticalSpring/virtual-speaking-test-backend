import { IsUUID, IsDateString, IsInt, IsString, IsArray } from 'class-validator';

export class CreateSpeakingTestDto {
  @IsUUID()       userId: string;
  @IsDateString() testDate: string;
  @IsInt()        overallScore: number;
  @IsInt()        pronunciation: number;
  @IsInt()        fluency: number;
  @IsInt()        accuracy: number;
  @IsString()     feedback: string;
  @IsArray()      details: any[];
}
