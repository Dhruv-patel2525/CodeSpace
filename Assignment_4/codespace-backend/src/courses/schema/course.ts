import { Schema, Document, model } from 'mongoose';

export interface Course {
  title: string;
  description: string;
  instructor: string;
  duration: string;
  courseCode: string;
  instructorEmail: string;
  lastUpdated?: Date;
}

export type CourseDocument = Document & Course;

export const CourseSchema = new Schema<Course>({
  title: { type: String, required: true },
  description: { type: String, required: true },
  instructor: { type: String, required: true },
  duration: { type: String, required: true },
  courseCode: { type: String, required: true, unique: true },
  instructorEmail: { type: String, required: true },
  lastUpdated: { type: Date, default: Date.now },
});

export const CourseModel = model<Course>('Course', CourseSchema);
