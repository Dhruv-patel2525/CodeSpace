import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Submission extends Document {
  @Prop({ required: true })
  problemId: string;  

  @Prop({ required: true })
  userId: string;  

  @Prop({ required: true })
  solution: string;  

  @Prop({ default: 'pending' })
  result: 'success' | 'failure' | 'pending';  

  @Prop({ default: Date.now })
  submittedAt: Date;
}

export const SubmissionSchema = SchemaFactory.createForClass(Submission);
