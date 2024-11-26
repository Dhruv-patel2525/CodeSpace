import { CreateProblemDto } from './dto/create-problem.dto';
import { UpdateProblemDto } from './dto/update-problem.dto';
import { Problem, ProblemDocument } from './schema/problem';
import { Model } from 'mongoose';
export declare class ProblemService {
    private readonly problemModel;
    constructor(problemModel: Model<ProblemDocument>);
    create(createProblemDto: CreateProblemDto): Promise<Problem>;
    findAll(): Promise<Problem[]>;
    findOne(problemId: number): Promise<Problem>;
    update(id: number, updateProblemDto: UpdateProblemDto): Promise<Problem>;
    remove(id: number): Promise<void>;
}
