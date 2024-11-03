import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/createcourse.dto';
import { UpdateCourseDto } from './dto/updateCourse.dto';
import { Course } from './schemas/courses';
export declare class CoursesController {
    private readonly courseService;
    constructor(courseService: CoursesService);
    getAllCourses(): Promise<Course[]>;
    findOne(courseCode: string): Promise<Course>;
    create(createCourseDto: CreateCourseDto): Promise<void>;
    updateCourse(courseCode: string, updateCourseDto: UpdateCourseDto): Promise<Course>;
    deleteCourse(courseCode: string): Promise<{
        message: string;
    }>;
}
