import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/createcourse.dto';
import { UpdateCourseDto } from './dto/updateCourse.dto';

@Controller('courses')
export class CoursesController {

    constructor(private readonly courseService : CoursesService) {}

    @Get()
    getAllCourses(){
        return this.courseService.findAll();
    }

  @Get(':courseId')
  findOne(@Param('courseId') courseId: string) {
    return this.courseService.findOne(+courseId);
  }
  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }
  @Put(':courseId')
  update(@Param('courseId') courseId: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.courseService.update(+courseId, updateCourseDto);
  }

  @Delete(':courseId')
  remove(@Param('courseId') courseId: string) {
    return this.courseService.remove(+courseId);
  }

}
