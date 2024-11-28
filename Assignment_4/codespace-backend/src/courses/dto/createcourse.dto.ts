import { IsNotEmpty, IsString, IsDateString } from 'class-validator';

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
}
