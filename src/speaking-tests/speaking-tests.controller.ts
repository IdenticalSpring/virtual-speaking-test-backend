import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SpeakingTestsService } from './speaking-tests.service';
import { CreateSpeakingTestDto } from './dto/create-speaking-test.dto';
import { UpdateSpeakingTestDto } from './dto/update-speaking-test.dto';

@Controller('speaking-tests')
export class SpeakingTestsController {
  constructor(private readonly speakingTestsService: SpeakingTestsService) {}

  @Post()
  create(@Body() dto: CreateSpeakingTestDto) {
    return this.speakingTestsService.create(dto);
  }

  @Get()
  findAll() {
    return this.speakingTestsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.speakingTestsService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() dto: UpdateSpeakingTestDto
  ) {
    return this.speakingTestsService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.speakingTestsService.remove(id);
  }
}
