import { HydratedDocument } from "mongoose";
export type ProblemDocument = HydratedDocument<Problem>;
export declare class Problem {
    problemId: number;
    title: string;
    tags: string;
    difficulty: string;
    avgtime: number;
    submissions: number;
    description: string;
    inputFormat: string;
    outputFormat: string;
    constraints: string;
    examples: [];
}
export declare const ProblemSchema: import("mongoose").Schema<Problem, import("mongoose").Model<Problem, any, any, any, import("mongoose").Document<unknown, any, Problem> & Problem & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Problem, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Problem>> & import("mongoose").FlatRecord<Problem> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
