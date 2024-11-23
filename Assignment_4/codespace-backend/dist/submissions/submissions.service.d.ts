import { Model } from 'mongoose';
import { Submission } from './schema/submission';
import { SubmitSolutionDto } from './dto/submissionSolution.dto';
export declare class SubmissionsService {
    private readonly submissionModel;
    constructor(submissionModel: Model<Submission>);
    submitSolution(submitSolutionDto: SubmitSolutionDto): Promise<Submission>;
    getSubmissionResult(submissionId: string): Promise<Submission>;
}
