import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/createcourse.dto';
import { UpdateCourseDto } from './dto/updateCourse.dto';
import { Course } from './schemas/courses';

@Controller('courses')
export class CoursesController {

    constructor(private readonly courseService : CoursesService) {}

    @Get()
    getAllCourses(){
        return this.courseService.findAll();
    }

  @Get(':courseCode')
  findOne(@Param('courseCode') courseCode: string) {
    return this.courseService.findByCourseCode(courseCode);
  }
  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }
  @Put(':courseCode')
  async updateCourse(
    @Param('courseCode') courseCode: string,
    @Body() updateCourseDto: UpdateCourseDto
  ): Promise<Course> {
    return this.courseService.updateCourse(courseCode, updateCourseDto);
  }

  @Delete(':courseCode')
  async deleteCourse(@Param('courseCode') courseCode: string): Promise<{ message: string }> {
    await this.courseService.remove(courseCode);
    return { message: `Course with code "${courseCode}" has been deleted` };
  }

}
