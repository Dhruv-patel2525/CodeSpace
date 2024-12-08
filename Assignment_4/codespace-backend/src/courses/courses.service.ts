import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Course, CourseDocument } from './schema/course';

@Injectable()
export class CourseService {
  constructor(
    @InjectModel('Course') private readonly courseModel: Model<CourseDocument>,
  ) {}

  async create(createCourseDto: Partial<Course>): Promise<Course> {
    const newCourse = new this.courseModel(createCourseDto);
    return newCourse.save();
  }

  async findAll(): Promise<Course[]> {
    return this.courseModel.find().exec();
  }

  async findOne(id: string): Promise<Course | null> {
    return this.courseModel.findById(id).exec();
  }

  async update(
    id: string,
    updateCourseDto: Partial<Course>,
  ): Promise<Course | null> {
    return this.courseModel
      .findByIdAndUpdate(id, updateCourseDto, {
        new: true,
      })
      .exec();
  }

  async remove(id: string): Promise<Course | null> {
    return this.courseModel.findByIdAndDelete(id).exec();
  }

  async getCoursesByInstructor(email: string): Promise<Course[]> {
    return this.courseModel.find({ instructorEmail: email }).exec();
  }

  async enrollUserInCourse(
    courseId: string,
    userEmail: string,
  ): Promise<Course | null> {
    return this.courseModel
      .findByIdAndUpdate(
        courseId,
        { $addToSet: { enrolledStudents: userEmail } },
        { new: true },
      )
      .exec();
  }

  async getEnrolledCourses(userEmail: string): Promise<Course[]> {
    return this.courseModel.find({ enrolledStudents: userEmail }).exec();
  }
}
