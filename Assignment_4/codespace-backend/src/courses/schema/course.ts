import { Schema, model, HydratedDocument } from 'mongoose';

export type CourseDocument = HydratedDocument<Course>;

export class Course {
  title: string;
  lastUpdated: Date;
  duration: string;
  courseCode: string;
}

export const CourseSchema = new Schema<Course>({
  title: { type: String, required: true },
  lastUpdated: { type: Date, default: Date.now },
  duration: { type: String, required: true },
  courseCode: { type: String, required: true, unique: true },
});

export const CourseModel = model<Course>('Course', CourseSchema);
