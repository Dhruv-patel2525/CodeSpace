import { ProblemService } from './problem.service';
import { CreateProblemDto } from './dto/create-problem.dto';
import { UpdateProblemDto } from './dto/update-problem.dto';
export declare class ProblemController {
    private readonly problemService;
    constructor(problemService: ProblemService);
    create(createProblemDto: CreateProblemDto): Promise<import("./schema/problem").Problem>;
    findAll(): Promise<import("./schema/problem").Problem[]>;
    findOne(id: string): Promise<import("./schema/problem").Problem>;
    update(id: string, updateProblemDto: UpdateProblemDto): Promise<import("./schema/problem").Problem>;
    remove(id: string): Promise<void>;
}
