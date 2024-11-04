"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoursesService = void 0;
const common_1 = require("@nestjs/common");
let CoursesService = class CoursesService {
    constructor() {
        this.courses = [
            { id: 1, title: 'Python Programming', description: 'Learn the basics of Python', instructor: 'John Doe' },
            { id: 2, title: 'JavaScript Fundamentals', description: 'Deep dive into advanced JavaScript features', instructor: 'Paul' },
        ];
    }
    findAll() {
        return this.courses;
    }
    findOne(courseId) {
        const course = this.courses.find(course => course.id === courseId);
        if (!course) {
            throw new common_1.NotFoundException(`Course with ID ${courseId} not found`);
        }
        return course;
    }
    create(courseData) {
        const newCourse = {
            id: this.courses.length + 1,
            ...courseData,
        };
        this.courses.push(newCourse);
        return newCourse;
    }
    update(courseId, updateCourseDto) {
        const course = this.findOne(courseId);
        const updatedCourse = { ...course, ...updateCourseDto };
        this.courses = this.courses.map(c => (c.id === courseId ? updatedCourse : c));
        return updatedCourse;
    }
    remove(courseId) {
        const courseIndex = this.courses.findIndex(course => course.id === courseId);
        if (courseIndex === -1) {
            throw new common_1.NotFoundException(`Course with ID ${courseId} not found`);
        }
        this.courses.splice(courseIndex, 1);
    }
};
exports.CoursesService = CoursesService;
exports.CoursesService = CoursesService = __decorate([
    (0, common_1.Injectable)()
], CoursesService);
//# sourceMappingURL=courses.service.js.map