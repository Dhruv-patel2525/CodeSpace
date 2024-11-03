import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/createcourse.dto';
import { UpdateCourseDto } from './dto/updateCourse.dto';
export declare class CoursesController {
    private readonly courseService;
    constructor(courseService: CoursesService);
    getAllCourses(): {
        id: number;
        title: string;
        description: string;
        instructor: string;
    }[];
    findOne(courseId: string): {
        id: number;
        title: string;
        description: string;
        instructor: string;
    };
    create(createCourseDto: CreateCourseDto): {
        title: string;
        description: string;
        instructor: string;
        id: number;
    };
    update(courseId: string, updateCourseDto: UpdateCourseDto): {
        title: string;
        description: string;
        instructor: string;
        id: number;
    };
    remove(courseId: string): void;
}
