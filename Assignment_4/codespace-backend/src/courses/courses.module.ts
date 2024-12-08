import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { CourseService } from './courses.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CourseSchema } from './schema/course';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Course', schema: CourseSchema }]),
  ],
  controllers: [CoursesController],
  providers: [CourseService],
})
export class CoursesModule {}
