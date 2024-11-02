import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";

export type CourseDocument = HydratedDocument<Course>;
@Schema()
export class Course{

@Prop({
    required:true,
})
title:string;
@Prop({
    required:true,
})
lastUpdated:Date;
@Prop({
    required:true,
})
duration:String;

}
export const CourseSchema =SchemaFactory.createForClass(Course);