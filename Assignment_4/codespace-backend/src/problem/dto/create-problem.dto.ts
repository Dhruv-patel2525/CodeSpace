import { IsArray, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateProblemDto {
    @IsNotEmpty()
    @IsNumber()
    problemId:number;
    @IsNotEmpty()
    @IsString()
    title:string;
    @IsNotEmpty()
    @IsString()
    tags:string;
    @IsNotEmpty()
    @IsString()
    difficulty:string;
    @IsNotEmpty()
    @IsNumber()
    avgtime:number;
    @IsNotEmpty()
    @IsNumber()
    submissions:number;
    @IsNotEmpty()
    @IsString()
    description:string;
    @IsNotEmpty()
    @IsString()
    inputFormat:string;
    @IsNotEmpty()
    @IsString()
    outputFormat:string;
    @IsNotEmpty()
    @IsArray()
    constraints:[];
    @IsArray()
    examples:[];
    @IsArray()
    templates:[];
    
}