import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ParseIntPipe } from '@nestjs/common';
import { LessonsService }       from './lessons.service';
import { CreateLessonDto }      from './dto/create-lesson.dto';
import { UpdateLessonDto }      from './dto/update-lesson.dto';
import { FilterLessonDto }      from './dto/filter-lesson.dto';

@Controller('lessons')
export class LessonsController {
  constructor(private readonly lessonsService: LessonsService) {}

  @Post()
  create(@Body() createLessonDto: CreateLessonDto) {
    return this.lessonsService.create(createLessonDto);
  }

  @Get()
  findAll(@Query('unit') unit?: string, @Query('chapter') chapter?: string) {
    const unitNumber = unit ? parseInt(unit, 10) : undefined;
    const chapterNumber = chapter ? parseInt(chapter, 10) : undefined;
    return this.lessonsService.findAll(unitNumber, chapterNumber);
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.lessonsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id', ParseIntPipe) id: number, @Body() updateLessonDto: UpdateLessonDto) {
    return this.lessonsService.update(id, updateLessonDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.lessonsService.remove(id);
  }
}