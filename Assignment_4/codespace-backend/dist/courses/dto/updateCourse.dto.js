"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCourseDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const createCourse_dto_1 = require("./createCourse.dto");
class UpdateCourseDto extends (0, mapped_types_1.PartialType)(createCourse_dto_1.CreateCourseDto) {
}
exports.UpdateCourseDto = UpdateCourseDto;
//# sourceMappingURL=updateCourse.dto.js.map