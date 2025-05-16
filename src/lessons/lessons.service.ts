// src/lessons/lessons.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository }        from 'typeorm';
import { CreateLessonDto }   from './dto/create-lesson.dto';
import { UpdateLessonDto }   from './dto/update-lesson.dto';
import { Lesson } from './entities/lesson.entity';

@Injectable()
export class LessonsService {
  constructor(
    @InjectRepository(Lesson)
    private readonly lessonRepository: Repository<Lesson>,
  ) {}

  async create(dto: CreateLessonDto): Promise<Lesson> {
    const lesson = this.lessonRepository.create(dto);
    return this.lessonRepository.save(lesson);
  }

  async findAll(unit?: number, chapter?: number): Promise<Lesson[]> {
    const where: any = {};
    if (unit !== undefined)   where.unit    = unit;
    if (chapter !== undefined) where.chapter = chapter;
    return this.lessonRepository.find({ where });
  }

  /** 
   * Now guaranteed to either throw or return a Lesson, never null/undefined 
   */
  async findOne(id: number): Promise<Lesson> {
    const lesson = await this.lessonRepository.findOneBy({ id });
    if (!lesson) throw new NotFoundException(`Lesson #${id} not found`);
    return lesson;
  }

  /**
   * Update then re-fetch with findOne(), so we again never return null
   */
  async update(id: number, dto: UpdateLessonDto): Promise<Lesson> {
    await this.lessonRepository.update(id, dto);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.lessonRepository.delete(id);
  }
}
