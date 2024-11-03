import { CreateProblemDto } from './dto/create-problem.dto';
import { UpdateProblemDto } from './dto/update-problem.dto';
import { Problem, ProblemDocument } from './schema/problem';
import { Model } from 'mongoose';
export declare class ProblemService {
    private readonly problemModel;
    constructor(problemModel: Model<ProblemDocument>);
    create(createProblemDto: CreateProblemDto): Promise<void>;
    findAll(): Promise<Problem[]>;
    findOne(id: number): string;
    update(id: number, updateProblemDto: UpdateProblemDto): string;
    remove(id: number): string;
}
