import { CreateProblemDto } from './create-problem.dto';
declare const UpdateProblemDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProblemDto>>;
export declare class UpdateProblemDto extends UpdateProblemDto_base {
    id: number;
    title: string;
    description: string;
    input: string;
    output: string;
    difficulty: string;
    tag: string;
}
export {};
