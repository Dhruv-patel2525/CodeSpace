import { PartialType } from '@nestjs/mapped-types';
import { CreateProblemDto } from './create-problem.dto';
import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class UpdateProblemDto extends PartialType(CreateProblemDto) {
    @IsOptional()
    @IsNumber()
    id:number;
    @IsOptional()
    @IsString()
    title:string;
    @IsOptional()
    @IsString()
    description:string;
    @IsOptional()
    @IsString()
    input:string;
    @IsOptional()
    @IsString()
    output:string;
    @IsOptional()
    @IsString()
    difficulty:string;
    @IsOptional()
    @IsString()
    tag:string;
}
