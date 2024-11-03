import { Injectable, NotFoundException } from '@nestjs/common';
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


  async create(createProblemDto: CreateProblemDto) {
    console.log("testing");
    const problem =await this.problemModel.create(createProblemDto);
  }

  // findAll() {
  //   return `This action returns all problem`;
  // }
  async findAll(): Promise<Problem[]> {
    return this.problemModel.find().exec(); // Fetches all problems from the database
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} problem`;
  // }

  async findOne(id: number): Promise<Problem[]> {
    
    const problem =  this.problemModel.find({id:id},'id title').exec();
   
    // if (!problem) throw new NotFoundException(`Problem with ID ${id} not found`);
    return problem;
   } 

  update(id: number, updateProblemDto: UpdateProblemDto) {
    return `This action updates a #${id} problem`;
  }

  async remove(id: number): Promise<{ deleted: boolean }> {
    const result = await  this.problemModel.findOneAndDelete({id:id}).exec();
    return {deleted:true};
  }
}
