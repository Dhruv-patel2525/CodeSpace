import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { CoursesModule } from './courses/courses.module';
import { ProblemModule } from './problem/problem.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SubmissionsModule } from './submissions/submissions.module';

@Module({
  imports: [ConfigModule.forRoot({isGlobal:true}),
    UsersModule, 
    CoursesModule, 
    ProblemModule,
    AuthModule,
    SubmissionsModule,
    MongooseModule.forRoot('mongodb://localhost:27017/codespace-data'),  

     ],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
