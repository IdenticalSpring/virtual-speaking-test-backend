import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SpeakingTestsService } from './speaking-tests.service';
import { SpeakingTestsController } from './speaking-tests.controller';
import { UsersModule } from '../users/users.module';
import { SpeakingTest } from './entities/speaking-test.entity';

@Module({
  imports: [TypeOrmModule.forFeature([SpeakingTest]), UsersModule],
  providers: [SpeakingTestsService],
  controllers: [SpeakingTestsController],
})
export class SpeakingTestsModule {}
