import { Schema, model, HydratedDocument } from 'mongoose';

export type CourseDocument = HydratedDocument<Course>;

export class Course {
  title: string;
  lastUpdated: Date;
  duration: string;
  courseCode: string;
  instructor: string;
  description: string;
}

export const CourseSchema = new Schema<Course>({
  title: { type: String, required: true },
  lastUpdated: { type: Date, default: Date.now },
  duration: { type: String, required: true },
  courseCode: { type: String, required: true, unique: true },
  instructor: { type: String, required: true },
  description: { type: String, required: true },
});

export const CourseModel = model<Course>('Course', CourseSchema);
