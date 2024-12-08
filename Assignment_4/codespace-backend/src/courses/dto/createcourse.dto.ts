import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsString()
  description: string;
  @IsNotEmpty()
  @IsString()
  instructor: string;
  @IsNotEmpty()
  @IsString()
  duration: string;
  @IsNotEmpty()
  @IsString()
  courseCode: string;
  @IsNotEmpty()
  @IsEmail()
  instructorEmail: string;
}
