import { BaseEntity } from 'typeorm';
import { User } from '../../user/entities/user.entity';
export declare class Course extends BaseEntity {
    id: string;
    title: string;
    description?: string;
    isPublished: boolean;
    createdAt: Date;
    updatedAt: Date;
    instructor: User;
}
