import { CreateCourseDto } from 'src/courses/dto/createcourse.dto';
import { UpdateCourseDto } from 'src/courses/dto/updateCourse.dto';
import { Course } from './schemas/courses';
import { Model } from 'mongoose';
export declare class CoursesService {
    private readonly courseModel;
    constructor(courseModel: Model<Course>);
    private courses;
    findAll(): Promise<Course[]>;
    findByCourseCode(courseCode: string): Promise<Course>;
    create(courseData: CreateCourseDto): Promise<void>;
    updateCourse(courseCode: string, updateCourseDto: UpdateCourseDto): Promise<Course>;
    remove(courseCode: string): Promise<void>;
}
