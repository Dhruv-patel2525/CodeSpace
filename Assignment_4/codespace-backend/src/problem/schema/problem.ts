import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ProblemDocument = HydratedDocument<Problem>; 
@Schema()
export class Problem{
    @Prop({
        required:true,
        index:true,
    })
    problemId:number;
    @Prop({
        required:true,
    })
    title:string;
    @Prop({
        required:true,
    })
    tags:string;
    @Prop({
        required:true,
    })
    difficulty:string;
    @Prop({
        required:true,
    })
    avgtime:number;
    @Prop({
        required:true,
    })
    submissions:number;
    @Prop({
        required:true,
    })
    description:string;
    @Prop({
        required:true,
    })
    inputFormat:string;
    @Prop({
        required:true,
    })
    outputFormat:string;
    @Prop({
        required:true,
    })
    constraints:string;
    @Prop()
    examples:[];
    
}
export const ProblemSchema = SchemaFactory.createForClass(Problem);