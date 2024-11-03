import { IsOptional, IsString } from 'class-validator';

export class UpdateCourseDto {
  @IsOptional()  
  @IsString()    
  title?: string;

  @IsOptional()  
  @IsString()    
  description?: string;

  @IsOptional() 
  @IsString()    
  instructor?: string;
  
  @IsOptional()
  @IsString()
  courseCode?: string;
}