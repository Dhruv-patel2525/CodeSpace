import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './dto/createcourse.dto';
import { UpdateCourseDto } from './dto/updateCourse.dto';
import { AuthGuard } from 'src/auth/guards/auth.guards';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UserRole } from 'src/auth/enums/roles.enum';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';

@Controller('courses')
export class CoursesController {

    constructor(private readonly courseService : CoursesService) {}
  @Roles(UserRole.CODER,UserRole.INSTRUCTOR)
  @UseGuards(RolesGuard)
  @UseGuards(AuthGuard)
  @Get()
  getAllCourses(){
        return this.courseService.findAll();
  }
  @Roles(UserRole.CODER,UserRole.INSTRUCTOR)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Get(':courseId')
  findOne(@Param('courseId') courseId: string) {
    return this.courseService.findOne(+courseId);
  }
  @Roles(UserRole.ADMIN,UserRole.INSTRUCTOR)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }
  @Roles(UserRole.ADMIN,UserRole.INSTRUCTOR)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Put(':courseId')
  update(@Param('courseId') courseId: string, @Body() updateCourseDto: UpdateCourseDto) {
    return this.courseService.update(+courseId, updateCourseDto);
  }
  @Roles(UserRole.ADMIN,UserRole.INSTRUCTOR)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Delete(':courseId')
  remove(@Param('courseId') courseId: string) {
    return this.courseService.remove(+courseId);
  }

}
