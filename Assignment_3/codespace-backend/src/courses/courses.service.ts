import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCourseDto } from 'src/courses/dto/createcourse.dto';
import { UpdateCourseDto } from 'src/courses/dto/updateCourse.dto';

@Injectable()
export class CoursesService {

    private courses = [
        { id: 1, title: 'Python Programming', description: 'Learn the basics of Python', instructor: 'John Doe' },
        { id: 2, title: 'JavaScript Fundamentals', description: 'Deep dive into advanced JavaScript features', instructor: 'Paul' },
      ];
    
      findAll() {
        return this.courses;
      }

      findOne(courseId: number) {
        const course = this.courses.find(course => course.id === courseId);
    
        if (!course) {
          throw new NotFoundException(`Course with ID ${courseId} not found`);
        }
        
        return course;
      }

      create(courseData: CreateCourseDto) {
        const newCourse = {
          id: this.courses.length + 1,  
          ...courseData,
        };
        this.courses.push(newCourse);
        return newCourse;
      }

      update(courseId: number, updateCourseDto: UpdateCourseDto) {
        const course = this.findOne(courseId);  // Find the course by ID
    
        const updatedCourse = { ...course, ...updateCourseDto };
        this.courses = this.courses.map(c => (c.id === courseId ? updatedCourse : c));
    
        return updatedCourse;
      }

      remove(courseId: number) {
        const courseIndex = this.courses.findIndex(course => course.id === courseId);
    
        if (courseIndex === -1) {
          throw new NotFoundException(`Course with ID ${courseId} not found`);
        }
    
        this.courses.splice(courseIndex, 1);  
      }

}
