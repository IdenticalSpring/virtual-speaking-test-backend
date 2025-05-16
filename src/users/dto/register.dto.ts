// src/auth/dto/register.dto.ts
import { IsNotEmpty, IsEmail } from 'class-validator';

export class RegisterDto {
  @IsNotEmpty()       username: string;
  @IsNotEmpty()       password: string;
  @IsNotEmpty()       name: string;
  @IsEmail()          email: string;
  @IsNotEmpty()       phone: string;
}

