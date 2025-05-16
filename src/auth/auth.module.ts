// src/auth/auth.module.ts
import { Module }           from '@nestjs/common';
import { TypeOrmModule }    from '@nestjs/typeorm';
import { AuthController } from './auth.controller';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from './auth.services';


@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [AuthService],
  controllers: [AuthController],
})
export class AuthModule {}
