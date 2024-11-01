import { IsDate, IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateCourseDto {
  @IsString()
  title: string;
  @IsDateString()
  lastUpdated: string;
  @IsString()
  duration: string;
}