import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Submission } from './schema/submission';
import { SubmitSolutionDto } from './dto/submissionSolution.dto';
import axios from 'axios';
import { ProblemService } from 'src/problem/problem.service';

@Injectable()
export class SubmissionsService {
  constructor(@InjectModel(Submission.name) private readonly submissionModel: Model<Submission>,private problemService:ProblemService) {}

  async submitSolution(submitSolutionDto: SubmitSolutionDto): Promise<Submission> {

    try{
      const input=  "{ \"gas\": [2, 3, 4], \"cost\": [3, 4, 3] }";

      const {solution}=submitSolutionDto;
      const response =await  this.executeCode(solution,'java',input);
      console.log(response);
    }
    catch(error)
    {

    }
    const newSubmission = new this.submissionModel({
      ...submitSolutionDto,
      result: 'pending', 
    });
    return newSubmission.save();
  }

  async executeCode(code: string,language: string,input: string): Promise<string> {
    const API_URL = 'https://api.jdoodle.com/v1/execute';
    const requestBody = {
      script: code,
      language,
      stdin: input, // Pass inputs here
      versionIndex: '3',
      clientId: 'your-client-id',
      clientSecret: 'your-client-secret',
    };

    try {
      const response = await axios.post(API_URL, requestBody);
      return response.data.output.trim(); // Trim to remove trailing newlines
    } catch (error) {
      console.error('Error executing code:', error.response?.data || error.message);
      throw new Error('Code execution failed.');
    }
  }
  
  async getSubmissionResult(submissionId: string): Promise<Submission> {
    const submission = await this.submissionModel.findById(submissionId).exec();
    if (!submission) {
      throw new NotFoundException(`Submission with ID ${submissionId} not found`);
    }
    return submission;
  }
}
