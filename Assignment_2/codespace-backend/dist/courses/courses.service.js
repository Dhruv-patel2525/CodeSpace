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
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const courses_1 = require("./schemas/courses");
const mongoose_2 = require("mongoose");
let CoursesService = class CoursesService {
    constructor(courseModel) {
        this.courseModel = courseModel;
        this.courses = [
            { id: 1, title: 'Python Programming', description: 'Learn the basics of Python', instructor: 'John Doe' },
            { id: 2, title: 'JavaScript Fundamentals', description: 'Deep dive into advanced JavaScript features', instructor: 'Paul' },
        ];
    }
    async findAll() {
        return await this.courseModel.find().exec();
    }
    async findByCourseCode(courseCode) {
        const course = await this.courseModel.findOne({ courseCode }).exec();
        if (!course) {
            throw new common_1.NotFoundException(`Course with code "${courseCode}" not found`);
        }
        return course;
    }
    async create(courseData) {
        const course = await this.courseModel.create(courseData);
    }
    async updateCourse(courseCode, updateCourseDto) {
        const updatedCourse = await this.courseModel
            .findOneAndUpdate({ courseCode }, updateCourseDto, { new: true })
            .exec();
        if (!updatedCourse) {
            throw new common_1.NotFoundException(`Course with code "${courseCode}" not found`);
        }
        return updatedCourse;
    }
    async remove(courseCode) {
        const deletedCourse = await this.courseModel.findOneAndDelete({ courseCode }).exec();
        if (!deletedCourse) {
            throw new common_1.NotFoundException(`Course with code "${courseCode}" not found`);
        }
    }
};
exports.CoursesService = CoursesService;
exports.CoursesService = CoursesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(courses_1.Course.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CoursesService);
//# sourceMappingURL=courses.service.js.map