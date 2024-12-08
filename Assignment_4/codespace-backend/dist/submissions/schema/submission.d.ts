import { HydratedDocument } from 'mongoose';
export type ProblemDocument = HydratedDocument<Submission>;
export declare class Submission {
    problemId: string;
    userId: number;
    solution: string;
    result: 'success' | 'failure' | 'pending';
}
export declare const SubmissionSchema: import("mongoose").Schema<Submission, import("mongoose").Model<Submission, any, any, any, import("mongoose").Document<unknown, any, Submission> & Submission & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Submission, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<Submission>> & import("mongoose").FlatRecord<Submission> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
