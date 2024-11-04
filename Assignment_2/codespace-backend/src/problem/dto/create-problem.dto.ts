import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProblemDto {
    @IsNotEmpty()
    @IsNumber()
    id:number;
    @IsNotEmpty()
    @IsString()
    title:string;
    @IsNotEmpty()
    @IsString()
    description:string;
    @IsNotEmpty()
    @IsString()
    input:string;
    @IsNotEmpty()
    @IsString()
    output:string;
    @IsNotEmpty()
    @IsString()
    difficulty:string;
    @IsNotEmpty()
    @IsString()
    tag:string;
}