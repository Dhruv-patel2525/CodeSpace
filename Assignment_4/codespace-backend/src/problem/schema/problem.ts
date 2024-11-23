import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type ProblemDocument = HydratedDocument<Problem>; 
@Schema()
export class Problem{
    @Prop({
        required:true,
        index:true,
    })
    id:number;
    @Prop({
        required:true,
    })
    title:string;
    @Prop({
        required:true,
    })
    description:string;
    @Prop({
        required:true,
    })
    input:string;
    @Prop({
        required:true,
    })
    output:string;
    @Prop({
        required:true,
    })
    difficulty:string;
    @Prop({
        required:true,
    })
    tag:string;
    
}
export const ProblemSchema = SchemaFactory.createForClass(Problem);