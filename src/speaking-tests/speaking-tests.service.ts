import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SpeakingTest } from './entities/speaking-test.entity';
import { CreateSpeakingTestDto } from './dto/create-speaking-test.dto';
import { UpdateSpeakingTestDto } from './dto/update-speaking-test.dto';


@Injectable()
export class SpeakingTestsService {
  constructor(@InjectRepository(SpeakingTest) private repo: Repository<SpeakingTest>) {}

  create(dto: CreateSpeakingTestDto) {
    const test = this.repo.create({ ...dto, user: { id: dto.userId } });
    return this.repo.save(test);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: string) {
    const test = await this.repo.findOneBy({ id });
    if (!test) throw new NotFoundException('Test not found');
    return test;
  }

  async update(id: string, dto: UpdateSpeakingTestDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: string) {
    return this.repo.delete(id);
  }
}
