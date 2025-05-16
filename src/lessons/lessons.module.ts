import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LessonsService } from './lessons.service';
import { Lesson } from './entities/lesson.entity';
import { LessonsController } from './lessons.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Lesson])],
  providers: [LessonsService],
  controllers: [LessonsController],
})
export class LessonsModule {}
