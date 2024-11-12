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
exports.ProblemController = void 0;
const common_1 = require("@nestjs/common");
const problem_service_1 = require("./problem.service");
const create_problem_dto_1 = require("./dto/create-problem.dto");
const update_problem_dto_1 = require("./dto/update-problem.dto");
let ProblemController = class ProblemController {
    constructor(problemService) {
        this.problemService = problemService;
    }
    create(createProblemDto) {
        return this.problemService.create(createProblemDto);
    }
    findAll() {
        return this.problemService.findAll();
    }
    findOne(id) {
        return this.problemService.findOne(+id);
    }
    update(id, updateProblemDto) {
        return this.problemService.update(+id, updateProblemDto);
    }
    remove(id) {
        return this.problemService.remove(+id);
    }
};
exports.ProblemController = ProblemController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_problem_dto_1.CreateProblemDto]),
    __metadata("design:returntype", void 0)
], ProblemController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ProblemController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProblemController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_problem_dto_1.UpdateProblemDto]),
    __metadata("design:returntype", void 0)
], ProblemController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ProblemController.prototype, "remove", null);
exports.ProblemController = ProblemController = __decorate([
    (0, common_1.Controller)('problem'),
    __metadata("design:paramtypes", [problem_service_1.ProblemService])
], ProblemController);
//# sourceMappingURL=problem.controller.js.map