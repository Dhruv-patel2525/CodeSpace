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
    create(createCourseDto: CreateCourseDto): Promise<import("mongoose").Document<unknown, {}, import("./schemas/courses").Course> & import("./schemas/courses").Course & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    update(courseId: string, updateCourseDto: UpdateCourseDto): {
        title: string;
        description: string;
        instructor: string;
        id: number;
    };
    remove(courseId: string): void;
}
