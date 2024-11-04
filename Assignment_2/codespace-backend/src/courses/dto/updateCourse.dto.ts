import { IsOptional, IsString } from 'class-validator';

export class UpdateCourseDto {
  @IsOptional()  // This field is optional during the update
  @IsString()    // This ensures the value is a string if provided
  title?: string;

  @IsOptional()  // Optional field
  @IsString()    // String validation
  description?: string;

  @IsOptional()  // Optional field
  @IsString()    // String validation
  instructor?: string;
}