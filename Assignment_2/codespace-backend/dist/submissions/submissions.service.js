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
exports.SubmissionsService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const submission_1 = require("./schema/submission");
let SubmissionsService = class SubmissionsService {
    constructor(submissionModel) {
        this.submissionModel = submissionModel;
    }
    async submitSolution(submitSolutionDto) {
        const newSubmission = new this.submissionModel({
            ...submitSolutionDto,
            result: 'pending',
        });
        return newSubmission.save();
    }
    async getSubmissionResult(submissionId) {
        const submission = await this.submissionModel.findById(submissionId).exec();
        if (!submission) {
            throw new common_1.NotFoundException(`Submission with ID ${submissionId} not found`);
        }
        return submission;
    }
};
exports.SubmissionsService = SubmissionsService;
exports.SubmissionsService = SubmissionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(submission_1.Submission.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], SubmissionsService);
//# sourceMappingURL=submissions.service.js.map