import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../dto/create-user.dto';
import { DataSource, Repository } from 'typeorm';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  private readonly userRepository: Repository<User>;

  constructor(private readonly dataSource: DataSource) {
    this.userRepository = this.dataSource.getRepository(User);
  }
  async create(data: CreateUserDto): Promise<User> {
    const user = User.create({ ...data });
    return await this.userRepository.save(user);
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.find();
  }

  async findOne(id: string): Promise<User> {
    const user = await this.userRepository.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }
}
