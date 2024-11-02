import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { ProblemModule } from './problem/problem.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, CoursesModule, ProblemModule,MongooseModule.forRoot('mongodb://localhost:27017/codespace-data')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
