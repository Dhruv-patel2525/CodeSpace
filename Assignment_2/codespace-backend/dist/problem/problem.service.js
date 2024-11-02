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
        const problem = await this.problemModel.create(createProblemDto);
    }
    findAll() {
        return `This action returns all problem`;
    }
    findOne(id) {
        return `This action returns a #${id} problem`;
    }
    update(id, updateProblemDto) {
        return `This action updates a #${id} problem`;
    }
    remove(id) {
        return `This action removes a #${id} problem`;
    }
};
exports.ProblemService = ProblemService;
exports.ProblemService = ProblemService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(problem_1.Problem.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], ProblemService);
//# sourceMappingURL=problem.service.js.map