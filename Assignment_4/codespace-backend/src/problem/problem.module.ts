import { Module } from '@nestjs/common';
import { ProblemService } from './problem.service';
import { ProblemController } from './problem.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Problem, ProblemSchema } from './schema/problem';

@Module({
  imports:[MongooseModule.forFeature([{name:Problem.name,schema:ProblemSchema}])],
  controllers: [ProblemController],
  providers: [ProblemService],
  exports:[ProblemService]
})
export class ProblemModule {}
