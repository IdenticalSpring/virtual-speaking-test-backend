// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule }         from './users/users.module';
import { LessonsModule }       from './lessons/lessons.module';
import { FeedbacksModule }     from './feedbacks/feedbacks.module';
import { SpeakingTestsModule } from './speaking-tests/speaking-tests.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (cs: ConfigService) => ({
        type: 'mysql',
        host: cs.get('DB_HOST'),
        port:     parseInt(cs.get('DB_PORT', '3306'), 10),
        username: cs.get('DB_USER'),
        password: cs.get('DB_PASS'),
        database: cs.get('DB_NAME'),
        entities: [__dirname + '/**/*.entity.{ts,js}'],
        synchronize: true,
        autoLoadEntities: true,
      }),
    }),
    AuthModule,
    UsersModule,
    LessonsModule,
    FeedbacksModule,
    SpeakingTestsModule,
  ],
})
export class AppModule {}
