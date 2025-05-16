// src/auth/auth.controller.ts
import { Controller, Post, Body } from '@nestjs/common';
import { RegisterDto } from 'src/users/dto/register.dto';
import { User } from 'src/users/entities/user.entity';
import { LoginDto } from 'src/users/dto/login.dto';
import { AuthService } from './auth.services';

@Controller('auth')
export class AuthController {
  constructor(private auth: AuthService) {}

  @Post('register')
  register(@Body() dto: RegisterDto): Promise<User> {
    return this.auth.register(dto);
  }

  @Post('login')
  login(@Body() dto: LoginDto): Promise<User> {
    return this.auth.login(dto);
  }
}
