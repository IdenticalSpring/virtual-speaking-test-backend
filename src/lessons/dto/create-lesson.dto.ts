import { IsNotEmpty, IsBoolean, IsInt, Min, IsObject } from 'class-validator';

export class CreateLessonDto {
  title: string;
  level: string;
  description: string;
  active?: boolean;
  chapter: number;
  unit: number;
}
