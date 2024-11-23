import { SubmitSolutionDto } from './dto/submissionSolution.dto';
import { SubmissionsService } from './submissions.service';
export declare class SubmissionsController {
    private readonly submissionsService;
    constructor(submissionsService: SubmissionsService);
    submitSolution(submitSolutionDto: SubmitSolutionDto): Promise<import("./schema/submission").Submission>;
    getSubmissionResult(submissionId: string): Promise<import("./schema/submission").Submission>;
}
