import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCourseDto } from 'src/courses/dto/createcourse.dto';
import { UpdateCourseDto } from 'src/courses/dto/updateCourse.dto';
import { Course, CourseDocument } from './schemas/courses';
import { Model } from 'mongoose';

@Injectable()
export class CoursesService {

  constructor(@InjectModel(Course.name) private readonly courseModel:Model<Course>)
  {

  }

    private courses = [
        { id: 1, title: 'Python Programming', description: 'Learn the basics of Python', instructor: 'John Doe' },
        { id: 2, title: 'JavaScript Fundamentals', description: 'Deep dive into advanced JavaScript features', instructor: 'Paul' },
      ];
  

      async findAll(): Promise<Course[]> {
        return await this.courseModel.find().exec();
      }


      async findByCourseCode(courseCode: string): Promise<Course> {
        const course = await this.courseModel.findOne({ courseCode }).exec();
    
        if (!course) {
          throw new NotFoundException(`Course with code "${courseCode}" not found`);
        }
    
        return course;
      }

      async create(courseData: CreateCourseDto) {
      
        const course=await this.courseModel.create(courseData);
      }


      async updateCourse(courseCode: string, updateCourseDto: UpdateCourseDto): Promise<Course> {
        const updatedCourse = await this.courseModel
          .findOneAndUpdate({ courseCode }, updateCourseDto, { new: true })
          .exec();
    
        if (!updatedCourse) {
          throw new NotFoundException(`Course with code "${courseCode}" not found`);
        }
    
        return updatedCourse;
      }

      async remove(courseCode: string): Promise<void> {
        const deletedCourse = await this.courseModel.findOneAndDelete({ courseCode }).exec();
    
        if (!deletedCourse) {
          throw new NotFoundException(`Course with code "${courseCode}" not found`);
        }
      }

}
