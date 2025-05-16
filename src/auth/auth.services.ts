import { Injectable, BadRequestException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LoginDto } from 'src/users/dto/login.dto';
import { RegisterDto } from 'src/users/dto/register.dto';
import { User, UserLevel, UserRole, UserStatus } from 'src/users/entities/user.entity';
import { Repository }        from 'typeorm';

@Injectable()
export class AuthService {
  constructor(@InjectRepository(User) private usersRepo: Repository<User>) {}

  async register(dto: RegisterDto): Promise<User> {
    // ensure unique username & email
    if (await this.usersRepo.findOneBy({ username: dto.username })) {
      throw new BadRequestException('Username already taken');
    }
    if (await this.usersRepo.findOneBy({ email: dto.email })) {
      throw new BadRequestException('Email already registered');
    }

    // directly save a partial into the repo
    const user = await this.usersRepo.save({
      username: dto.username,
      password: dto.password,
      name:     dto.name,
      email:    dto.email,
      phone:    dto.phone,
      role:     UserRole.Student,
      status:   UserStatus.Active,
      level:    UserLevel.L1,
    });

    return user;
  }

  async login(dto: LoginDto): Promise<User> {
    const user = await this.usersRepo.findOneBy({ username: dto.username });
    if (!user) {
      throw new NotFoundException('User not found');
    }
    if (user.password !== dto.password) {
      throw new BadRequestException('Invalid credentials');
    }
    return user;
  }
}
