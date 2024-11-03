import { IsNotEmpty, IsString, MinLength } from 'class-validator';

export class ResetPasswordDto {
  @IsNotEmpty()
  @IsString()
  resetToken: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)  
  newPassword: string;
}