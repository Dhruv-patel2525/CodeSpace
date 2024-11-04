import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { ProblemModule } from './problem/problem.module';
<<<<<<< HEAD

@Module({
  imports: [UsersModule, CoursesModule, ProblemModule],
=======
import { MongooseModule } from '@nestjs/mongoose';
import { SubmissionsModule } from './submissions/submissions.module';

@Module({
  imports: [UsersModule, CoursesModule, ProblemModule,MongooseModule.forRoot('mongodb://localhost:27017/codespace-data'), SubmissionsModule],
>>>>>>> origin/Develop-vishwa-nest
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
