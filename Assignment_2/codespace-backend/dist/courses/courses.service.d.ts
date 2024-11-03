import { CreateCourseDto } from 'src/courses/dto/createcourse.dto';
import { UpdateCourseDto } from 'src/courses/dto/updateCourse.dto';
import { Course } from './schemas/courses';
import { Model } from 'mongoose';
export declare class CoursesService {
    private readonly courseModel;
    constructor(courseModel: Model<Course>);
    private courses;
    findAll(): Promise<Course[]>;
    findOne(courseId: number): {
        id: number;
        title: string;
        description: string;
        instructor: string;
    };
    create(courseData: CreateCourseDto): Promise<void>;
    update(courseId: number, updateCourseDto: UpdateCourseDto): {
        title: string;
        description: string;
        instructor: string;
        id: number;
    };
    remove(courseId: number): void;
}
