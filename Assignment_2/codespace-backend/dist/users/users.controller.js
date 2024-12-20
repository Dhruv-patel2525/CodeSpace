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
exports.UsersController = void 0;
const common_1 = require("@nestjs/common");
const login_dto_1 = require("./dto/login.dto");
const users_service_1 = require("./users.service");
const signup_dto_1 = require("./dto/signup.dto");
const resetpwd_dto_1 = require("./dto/resetpwd.dto");
const resetpassword_dto_1 = require("./dto/resetpassword.dto");
const updateUserProfile_dto_1 = require("./dto/updateUserProfile.dto");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    registerUser(signup) {
        return this.userService.registerUser(signup);
    }
    loginUser(logindto) {
        return this.userService.loginUser(logindto);
    }
    logoutUser() {
        return this.userService.logoutUser();
    }
    async forgotPassword(requestPasswordResetDto) {
        return this.userService.forgotPassword(requestPasswordResetDto.email);
    }
    async requestPasswordReset(requestPasswordResetDto) {
        return this.userService.requestPasswordReset(requestPasswordResetDto.email);
    }
    async resetPassword(resetPasswordDto) {
        return this.userService.resetPassword(resetPasswordDto);
    }
    async getUserProfile(userId) {
        if (!userId) {
            throw new common_1.NotFoundException('User ID is required');
        }
        return this.userService.getUserProfile(userId);
    }
    async updateUserProfile(userId, updateUserProfileDto) {
        if (!userId) {
            throw new common_1.NotFoundException('User ID is required');
        }
        return this.userService.updateUserProfile(userId, updateUserProfileDto);
    }
};
exports.UsersController = UsersController;
__decorate([
    (0, common_1.Post)('registerUser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [signup_dto_1.SignupDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "registerUser", null);
__decorate([
    (0, common_1.Post)('loginUser'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [login_dto_1.LoginDto]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "loginUser", null);
__decorate([
    (0, common_1.Post)('logoutuser'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "logoutUser", null);
__decorate([
    (0, common_1.Post)('forgotPassword'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [resetpassword_dto_1.RequestPasswordResetDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "forgotPassword", null);
__decorate([
    (0, common_1.Post)('requestPasswordReset'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [resetpassword_dto_1.RequestPasswordResetDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "requestPasswordReset", null);
__decorate([
    (0, common_1.Post)('resetPassword'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [resetpwd_dto_1.ResetPasswordDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "resetPassword", null);
__decorate([
    (0, common_1.Get)('profile'),
    __param(0, (0, common_1.Query)('userId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "getUserProfile", null);
__decorate([
    (0, common_1.Put)('profile'),
    __param(0, (0, common_1.Query)('userId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, updateUserProfile_dto_1.UpdateUserProfileDto]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUserProfile", null);
exports.UsersController = UsersController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], UsersController);
//# sourceMappingURL=users.controller.js.map