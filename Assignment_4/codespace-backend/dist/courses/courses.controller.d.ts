import { CourseService } from './courses.service';
import { CreateCourseDto } from './dto/createcourse.dto';
import { UpdateCourseDto } from './dto/updateCourse.dto';
export declare class CoursesController {
    private readonly courseService;
    constructor(courseService: CourseService);
    getAllCourses(): Promise<import("./schema/course").Course[]>;
    findOne(courseId: string): Promise<import("./schema/course").Course>;
    create(createCourseDto: CreateCourseDto): Promise<import("./schema/course").Course>;
    update(courseId: string, updateCourseDto: UpdateCourseDto): Promise<import("./schema/course").Course>;
    remove(courseId: string): Promise<import("./schema/course").Course>;
    getCoursesByInstructor(email: string): Promise<import("./schema/course").Course[]>;
}
