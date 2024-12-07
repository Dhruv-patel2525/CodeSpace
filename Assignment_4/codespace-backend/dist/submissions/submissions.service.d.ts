import { Model } from 'mongoose';
import { Submission } from './schema/submission';
import { SubmitSolutionDto } from './dto/submissionSolution.dto';
import { ProblemService } from 'src/problem/problem.service';
export declare class SubmissionsService {
    private readonly submissionModel;
    private problemService;
    constructor(submissionModel: Model<Submission>, problemService: ProblemService);
    submitSolution(submitSolutionDto: SubmitSolutionDto): Promise<Submission>;
    executeCode(code: string, language: string, input: string): Promise<string>;
    getSubmissionResult(submissionId: string): Promise<Submission>;
}
