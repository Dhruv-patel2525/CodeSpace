import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Submission } from './schema/submission';
import { SubmitSolutionDto } from './dto/submissionSolution.dto';

@Injectable()
export class SubmissionsService {
  constructor(@InjectModel(Submission.name) private readonly submissionModel: Model<Submission>) {}

  async submitSolution(submitSolutionDto: SubmitSolutionDto): Promise<Submission> {
    const newSubmission = new this.submissionModel({
      ...submitSolutionDto,
      result: 'pending', 
    });
    return newSubmission.save();
  }

  async getSubmissionResult(submissionId: string): Promise<Submission> {
    const submission = await this.submissionModel.findById(submissionId).exec();
    if (!submission) {
      throw new NotFoundException(`Submission with ID ${submissionId} not found`);
    }
    return submission;
  }
}
