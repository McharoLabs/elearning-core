import { BaseEntity } from 'typeorm';
import { Course } from '../../course/entities/course.entity';
export declare class User extends BaseEntity {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date;
    courses: Course[];
}
