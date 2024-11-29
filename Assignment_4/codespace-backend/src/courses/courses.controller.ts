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
import { AuthGuard } from 'src/auth/guards/auth.guards';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UserRole } from 'src/auth/enums/roles.enum';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';

@Controller('courses')
export class CoursesController {
  constructor(private readonly courseService: CourseService) {}
  // @Roles(UserRole.CODER, UserRole.INSTRUCTOR)
  // @UseGuards(RolesGuard)
  // @UseGuards(AuthGuard)
  @Get()
  getAllCourses() {
    return this.courseService.findAll();
  }
  // @Roles(UserRole.CODER, UserRole.INSTRUCTOR)
  // @UseGuards(RolesGuard)
  // @UseGuards(JwtAuthGuard)
  @Get('details/:courseId')
  async findOne(@Param('courseId') courseId: string) {
    return this.courseService.findOne(courseId);
  }
  // @Roles(UserRole.CODER, UserRole.INSTRUCTOR)
  // @UseGuards(RolesGuard)
  // @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() createCourseDto: CreateCourseDto) {
    return this.courseService.create(createCourseDto);
  }
  @Roles(UserRole.ADMIN, UserRole.INSTRUCTOR)
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Put(':courseId')
  async update(
    @Param('courseId') courseId: string,
    @Body() updateCourseDto: UpdateCourseDto,
  ) {
    return this.courseService.update(courseId, updateCourseDto);
  }

  @Roles(UserRole.ADMIN, UserRole.INSTRUCTOR)
  @UseGuards(RolesGuard, JwtAuthGuard)
  @Delete(':courseId')
  async remove(@Param('courseId') courseId: string) {
    return this.courseService.remove(courseId);
  }

  @Get('instructor') // Specific route comes before generic routes
  async getCoursesByInstructor(@Query('email') email: string) {
    if (!email) {
      throw new BadRequestException('Email query parameter is required');
    }
    return this.courseService.getCoursesByInstructor(email);
  }
}
