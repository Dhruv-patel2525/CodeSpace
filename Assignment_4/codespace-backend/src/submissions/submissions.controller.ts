import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SubmitSolutionDto } from './dto/submissionSolution.dto';
import { SubmissionsService } from './submissions.service';
import { RolesGuard } from 'src/auth/guards/roles.guard';
import { Roles } from 'src/auth/decorators/roles.decorator';
import { UserRole } from 'src/auth/enums/roles.enum';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth/jwt-auth.guard';

@Controller('submissions')
export class SubmissionsController {

  constructor(private readonly submissionsService: SubmissionsService) {}
  @Roles(UserRole.CODER)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Post()
  async submitSolution(@Body() submitSolutionDto: SubmitSolutionDto) {
    return this.submissionsService.submitSolution(submitSolutionDto);
  }
  @Roles(UserRole.CODER)
  @UseGuards(RolesGuard)
  @UseGuards(JwtAuthGuard)
  @Get(':submissionId')
  async getSubmissionResult(@Param('submissionId') submissionId: string) {
    return this.submissionsService.getSubmissionResult(submissionId);

}

}

