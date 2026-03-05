import { CreateUserDto } from '../dto/create-user.dto';
import { DataSource } from 'typeorm';
import { User } from '../entities/user.entity';
export declare class UsersService {
    private readonly dataSource;
    private readonly userRepository;
    constructor(dataSource: DataSource);
    create(data: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
}
