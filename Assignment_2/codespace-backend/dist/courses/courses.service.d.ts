import { CreateCourseDto } from 'src/courses/dto/createcourse.dto';
import { UpdateCourseDto } from 'src/courses/dto/updateCourse.dto';
export declare class CoursesService {
    private courses;
    findAll(): {
        id: number;
        title: string;
        description: string;
        instructor: string;
    }[];
    findOne(courseId: number): {
        id: number;
        title: string;
        description: string;
        instructor: string;
    };
    create(courseData: CreateCourseDto): {
        title: string;
        description: string;
        instructor: string;
        id: number;
    };
    update(courseId: number, updateCourseDto: UpdateCourseDto): {
        title: string;
        description: string;
        instructor: string;
        id: number;
    };
    remove(courseId: number): void;
}
