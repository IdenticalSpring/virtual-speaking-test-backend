import { IsNotEmpty, IsEmail, IsEnum } from 'class-validator';
import { UserLevel, UserRole, UserStatus } from '../entities/user.entity';

export class CreateUserDto {
  @IsNotEmpty()     username: string;
  @IsNotEmpty()     password: string;
  @IsNotEmpty()     name: string;
  @IsEmail()        email: string;
  @IsNotEmpty()     phone: string;
  @IsEnum(UserRole)   role: UserRole;
  @IsEnum(UserStatus) status: UserStatus;
  @IsEnum(UserLevel)  level: UserLevel;
}