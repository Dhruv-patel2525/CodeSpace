import { CreateProblemDto } from './dto/create-problem.dto';
import { UpdateProblemDto } from './dto/update-problem.dto';
export declare class ProblemService {
    create(createProblemDto: CreateProblemDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateProblemDto: UpdateProblemDto): string;
    remove(id: number): string;
}
