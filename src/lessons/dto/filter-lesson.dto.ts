import { IsOptional, IsInt, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class FilterLessonDto {
  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  chapter?: number;

  @IsOptional()
  @Type(() => Number)
  @IsInt()
  @Min(1)
  unit?: number;
}