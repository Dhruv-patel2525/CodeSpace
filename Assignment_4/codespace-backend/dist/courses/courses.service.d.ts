import { Model } from 'mongoose';
import { Course, CourseDocument } from './schema/course';
export declare class CourseService {
    private readonly courseModel;
    constructor(courseModel: Model<CourseDocument>);
    create(createCourseDto: Partial<Course>): Promise<Course>;
    findAll(): Promise<Course[]>;
    findOne(id: string): Promise<Course | null>;
    update(id: string, updateCourseDto: Partial<Course>): Promise<Course | null>;
    remove(id: string): Promise<Course | null>;
    getCoursesByInstructor(email: string): Promise<Course[]>;
}
