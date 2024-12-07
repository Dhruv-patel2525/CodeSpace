import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class SubmitSolutionDto {
  @IsNotEmpty()
  @IsNumber()
  problemId: number;

  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsString()
  solution: string;
}
