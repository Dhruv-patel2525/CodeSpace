import { ProblemService } from './problem.service';
import { CreateProblemDto } from './dto/create-problem.dto';
import { UpdateProblemDto } from './dto/update-problem.dto';
export declare class ProblemController {
    private readonly problemService;
    constructor(problemService: ProblemService);
    create(createProblemDto: CreateProblemDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateProblemDto: UpdateProblemDto): string;
    remove(id: string): string;
}
