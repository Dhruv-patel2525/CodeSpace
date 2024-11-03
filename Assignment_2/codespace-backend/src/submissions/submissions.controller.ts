import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { SubmitSolutionDto } from './dto/submissionSolution.dto';
import { SubmissionsService } from './submissions.service';

@Controller('submissions')
export class SubmissionsController {

    constructor(private readonly submissionsService: SubmissionsService) {}

  @Post()
  async submitSolution(@Body() submitSolutionDto: SubmitSolutionDto) {
    return this.submissionsService.submitSolution(submitSolutionDto);
  }

  @Get(':submissionId')
  async getSubmissionResult(@Param('submissionId') submissionId: string) {
    return this.submissionsService.getSubmissionResult(submissionId);

}

}

