import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { ProblemModule } from './problem/problem.module';

@Module({
  imports: [UsersModule, CoursesModule, ProblemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
