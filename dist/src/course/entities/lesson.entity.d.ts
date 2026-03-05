import { BaseEntity } from 'typeorm';
import { Course } from '../../course/entities/course.entity';
export declare class Lesson extends BaseEntity {
    id: string;
    title: string;
    content?: string;
    createdAt: Date;
    updatedAt: Date;
    course: Course;
}
