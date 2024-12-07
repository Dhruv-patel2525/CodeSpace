import { Module } from '@nestjs/common';
import { SubmissionsController } from './submissions.controller';
import { SubmissionsService } from './submissions.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Submission, SubmissionSchema } from './schema/submission';
import { ProblemModule } from 'src/problem/problem.module';

@Module({
  imports: [
    ProblemModule,
    MongooseModule.forFeature([{ name: Submission.name, schema: SubmissionSchema }]), 
  ],
  controllers: [SubmissionsController],
  providers: [SubmissionsService]
})
export class SubmissionsModule {}
