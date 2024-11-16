import { IsEmail, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class SignupDto {
  @IsNotEmpty()
  @IsNumber()
  userId:number;
  @IsNotEmpty()
  @IsString()
  name: string;
  @IsNotEmpty()
  @IsEmail()
  email: string;
  @IsNotEmpty()
  @IsString()
  role: string; 
  @IsNotEmpty()
  @IsString()
  password: string;
  @IsNotEmpty()
  @IsString()
  confirmPassword: string;
  }