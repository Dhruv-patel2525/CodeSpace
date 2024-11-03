import { ProblemService } from './problem.service';
import { CreateProblemDto } from './dto/create-problem.dto';
import { UpdateProblemDto } from './dto/update-problem.dto';
export declare class ProblemController {
    private readonly problemService;
    constructor(problemService: ProblemService);
    create(createProblemDto: CreateProblemDto): Promise<void>;
    findAll(): Promise<import("./schema/problem").Problem[]>;
    findOne(id: number): Promise<import("./schema/problem").Problem[]>;
    update(id: string, updateProblemDto: UpdateProblemDto): string;
    remove(id: number): Promise<{
        deleted: boolean;
    }>;
}
