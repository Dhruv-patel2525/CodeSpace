import { IsDate, IsDateString, IsNotEmpty, IsString } from 'class-validator';

export class CreateCourseDto {
  @IsNotEmpty()
  @IsString()
  title: string;
  @IsNotEmpty()
  @IsDateString()
  lastUpdated: string;
  @IsNotEmpty()
  @IsString()
  duration: string;
}