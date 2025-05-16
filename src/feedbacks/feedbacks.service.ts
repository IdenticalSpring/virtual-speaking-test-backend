import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFeedbackDto } from './dto/create-feedback.dto';
import { Feedback } from './entities/feedback.entity';
import { UpdateFeedbackDto } from './dto/update-feedback.dto';

@Injectable()
export class FeedbacksService {
  constructor(@InjectRepository(Feedback) private repo: Repository<Feedback>) {}

  create(dto: CreateFeedbackDto) {
    const fb = this.repo.create({ ...dto, user: { id: dto.userId } });
    return this.repo.save(fb);
  }

  findAll() {
    return this.repo.find();
  }

  async findOne(id: string) {
    const fb = await this.repo.findOneBy({ id });
    if (!fb) throw new NotFoundException('Feedback not found');
    return fb;
  }
  

  async update(id: string, dto: UpdateFeedbackDto) {
    await this.repo.update(id, dto);
    return this.findOne(id);
  }

  remove(id: string) {
    return this.repo.delete(id);
  }
}
