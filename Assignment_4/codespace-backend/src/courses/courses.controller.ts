import {
  BadRequestException,
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  UseGuards,
} from '@nestjs/common';
import { CourseService } from './courses.service';
import { CreateCourseDto } from './dto/createcourse.dto';
import { UpdateCourseDto } from './dto/updateCourse.dto';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UserRole } from 'src/auth/enums/roles.enum';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CourseService) {}
  @Roles(UserRole.CODER, UserRole.INSTRUCTOR)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Get()
  getAllCourses() {
    return this.courseService.findAll();
  }
  @Roles(UserRole.CODER, UserRole.INSTRUCTOR)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Get('details/:courseId')
  async findOne(@Param('courseId') courseId: string) {
    return this.courseService.findOne(courseId);
  }
  @Roles(UserRole.CODER, UserRole.INSTRUCTOR)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }
<<<<<<< HEAD
  // @Roles(UserRole.ADMIN, UserRole.INSTRUCTOR)
  // @UseGuards(RolesGuard)
  // @UseGuards(JwtAuthGuard)
  // @Put(':courseId')
=======
  @Roles(UserRole.ADMIN, UserRole.INSTRUCTOR)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Put(':courseId')
>>>>>>> origin/develop
  async update(
    @Param('courseId') courseId: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.courseService.update(courseId, updateCourseDto);
  }

  @Roles(UserRole.ADMIN, UserRole.INSTRUCTOR)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Delete(':courseId')
  async remove(@Param('courseId') courseId: string) {
    return this.courseService.remove(courseId);
  }

  @Get('instructor')
  async getCoursesByInstructor(@Query('email') email: string) {
    if (!email) {
      throw new BadRequestException('Email query parameter is required');
    }
    return this.courseService.getCoursesByInstructor(email);
  }

  @Post(':courseId/enroll')
  async enrollUserInCourse(
    @Param('courseId') courseId: string,
    @Body('userEmail') userEmail: string,
  ) {
    try {
      const updatedCourse = await this.courseService.enrollUserInCourse(
        courseId,
        userEmail,
      );
      if (!updatedCourse) {
        throw new Error('Enrollment failed');
      }
      return { message: 'User enrolled successfully', updatedCourse };
    } catch (error) {
      return { message: 'Error enrolling user', error: error.message };
    }
  }

  @Get('enrolled/:userEmail')
  async getEnrolledCourses(@Param('userEmail') userEmail: string) {
    try {
      const enrolledCourses =
        await this.courseService.getEnrolledCourses(userEmail);
      return enrolledCourses;
    } catch (error) {
      return {
        message: 'Error fetching enrolled courses',
        error: error.message,
      };
    }
  }
}
