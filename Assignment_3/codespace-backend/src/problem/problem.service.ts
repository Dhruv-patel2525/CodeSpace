import { BadRequestException, HttpStatus, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { CreateProblemDto } from './dto/create-problem.dto';
import { UpdateProblemDto } from './dto/update-problem.dto';
import { Problem, ProblemDocument } from './schema/problem';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Console } from 'console';

@Injectable()
export class ProblemService {
  constructor(
    @InjectModel(Problem.name) private readonly problemModel: Model<ProblemDocument>
) {}


async create(createProblemDto: CreateProblemDto): Promise<Problem> {
  try {
    const problem = await this.problemModel.create(createProblemDto);
    return problem;
  } catch (error) {
    console.error('Error creating problem:', error.message);
    if (error.name === 'ValidationError') {
      throw new BadRequestException('Invalid data provided for creating problem');
    }

    throw new InternalServerErrorException('Failed to create problem. Please try again later.');
  }
}

  
  async findAll(): Promise<Problem[]> {
    try {
      return await this.problemModel.find().exec();
    } catch (error) {
      console.error('Error fetching courses:', error.message);
      throw new InternalServerErrorException('Failed to fetch courses. Please try again later.');
    }
  }
  
  // async findAll(): Promise<Problem[]> {
  //   return this.problemModel.find().exec(); // Fetches all problems from the database
  // }



  async findOne(id: number): Promise<Problem> {
    try{
      const problem  =   await  this.problemModel.findOne({ id }).exec();
      // const problem =  this.problemModel.find({id:id},'id title').exec();
      if (!problem) {
        throw new NotFoundException(`Problem with ID ${id} not found`);
      }
      return problem;
    }catch (error) {
      console.error(`Error fetching problem with ID ${id}:`, error.message);
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException('Failed to fetch problem. Please try again later.');
    }
  }


  async update(id: number, updateProblemDto: UpdateProblemDto):Promise<Problem> {
    try{
      const updatedProblem = await this.problemModel
        .findOneAndUpdate({ id }, updateProblemDto, { new: true })   
        .exec();
        if (!updatedProblem) {
          throw new NotFoundException(`Problem with code "${id}" not found`);
        }
        return updatedProblem;
    }catch(error)
    {
      console.error(`Error updating problem with ID ${id}:`, error.message);
      if (error instanceof NotFoundException) throw error;
      throw new InternalServerErrorException('Failed to update problem. Please try again later.');
    }
    
  }


 

  async remove(id: number): Promise<void> {
    try{
    const result = await  this.problemModel.findOneAndDelete({id:id}).exec();
    if (!result) {
      throw new NotFoundException(`Problem with id - "${id}" not found`);
    }
    
  }catch(error)
  {
    console.error(`Error deleting problem with ID ${id}:`, error.message);
    if (error instanceof NotFoundException) throw error;
    throw new InternalServerErrorException('Failed to delete problem. Please try again later.');
  }
}
}