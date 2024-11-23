import { IsNotEmpty, IsString } from 'class-validator';

export class SubmitSolutionDto {
  @IsNotEmpty()
  @IsString()
  problemId: string;

  @IsNotEmpty()
  @IsString()
  userId: string;

  @IsNotEmpty()
  @IsString()
  solution: string;
}
