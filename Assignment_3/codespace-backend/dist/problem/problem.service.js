"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProblemService = void 0;
const common_1 = require("@nestjs/common");
const problem_1 = require("./schema/problem");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProblemService = class ProblemService {
    constructor(problemModel) {
        this.problemModel = problemModel;
    }
    async create(createProblemDto) {
        try {
            const problem = await this.problemModel.create(createProblemDto);
            return problem;
        }
        catch (error) {
            console.error('Error creating problem:', error.message);
            if (error.name === 'ValidationError') {
                throw new common_1.BadRequestException('Invalid data provided for creating problem');
            }
            throw new common_1.InternalServerErrorException('Failed to create problem. Please try again later.');
        }
    }
    async findAll() {
        try {
            return await this.problemModel.find().exec();
        }
        catch (error) {
            console.error('Error fetching courses:', error.message);
            throw new common_1.InternalServerErrorException('Failed to fetch courses. Please try again later.');
        }
    }
    async findOne(id) {
        try {
            const problem = await this.problemModel.findOne({ id }).exec();
            if (!problem) {
                throw new common_1.NotFoundException(`Problem with ID ${id} not found`);
            }
            return problem;
        }
        catch (error) {
            console.error(`Error fetching problem with ID ${id}:`, error.message);
            if (error instanceof common_1.NotFoundException)
                throw error;
            throw new common_1.InternalServerErrorException('Failed to fetch problem. Please try again later.');
        }
    }
    async update(id, updateProblemDto) {
        try {
            const updatedProblem = await this.problemModel
                .findOneAndUpdate({ id }, updateProblemDto, { new: true })
                .exec();
            if (!updatedProblem) {
                throw new common_1.NotFoundException(`Problem with code "${id}" not found`);
            }
            return updatedProblem;
        }
        catch (error) {
            console.error(`Error updating problem with ID ${id}:`, error.message);
            if (error instanceof common_1.NotFoundException)
                throw error;
            throw new common_1.InternalServerErrorException('Failed to update problem. Please try again later.');
        }
    }
    async remove(id) {
        try {
            const result = await this.problemModel.findOneAndDelete({ id: id }).exec();
            if (!result) {
                throw new common_1.NotFoundException(`Problem with id - "${id}" not found`);
            }
        }
        catch (error) {
            console.error(`Error deleting problem with ID ${id}:`, error.message);
            if (error instanceof common_1.NotFoundException)
                throw error;
            throw new common_1.InternalServerErrorException('Failed to delete problem. Please try again later.');
        }
    }
};
exports.ProblemService = ProblemService;
exports.ProblemService = ProblemService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(problem_1.Problem.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProblemService);
//# sourceMappingURL=problem.service.js.map