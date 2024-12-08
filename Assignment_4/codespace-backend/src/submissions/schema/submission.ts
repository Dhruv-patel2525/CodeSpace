import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
export type ProblemDocument = HydratedDocument<Submission>; 


@Schema()
export class Submission {
  @Prop({ required: true })
  problemId: string;  

  @Prop({ required: true })
  userId: number;  

  @Prop({ required: true })
  solution: string;  

  @Prop({ default: 'pending' })
  result: 'success' | 'failure' | 'pending';  

  // @Prop({ default: Date.now })
  // submittedAt: Date;
}

export const SubmissionSchema = SchemaFactory.createForClass(Submission);
