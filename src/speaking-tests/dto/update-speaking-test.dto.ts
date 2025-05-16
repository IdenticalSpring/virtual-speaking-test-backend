import { PartialType } from '@nestjs/mapped-types';
import { CreateSpeakingTestDto } from './create-speaking-test.dto';

export class UpdateSpeakingTestDto extends PartialType(CreateSpeakingTestDto) {}
