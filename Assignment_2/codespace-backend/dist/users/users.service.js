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
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const user_1 = require("./schema/user");
const mongoose_2 = require("mongoose");
let UsersService = class UsersService {
    constructor(userModel) {
        this.userModel = userModel;
        this.users = [
            { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Learner', password: 'password123' },
        ];
        this.resetTokens = new Map();
    }
    logoutUser() {
        console.log("User Logged out");
    }
    async forgotPassword(email) {
        const user = await this.userModel.findOne({ email }).exec();
        if (!user) {
            throw new common_1.NotFoundException('User with this email does not exist');
        }
        const resetToken = `reset-${Math.random().toString(36).substr(2)}`;
        user.resetToken = resetToken;
        await user.save();
        return { message: 'Password reset link has been sent', resetToken };
    }
    async loginUser(logindto) {
        const { email, password } = logindto;
        const user = await this.userModel.findOne({ email }).exec();
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        if (user.password !== password) {
            throw new common_1.UnauthorizedException('Invalid credentials');
        }
        return {
            message: 'Login successful',
            user: {
                email: user.email,
                name: user.name,
                role: user.role,
            },
        };
    }
    async registerUser(signupDto) {
        const signupObj = { email: signupDto.email, name: signupDto.name, role: signupDto.role, password: signupDto.password };
        const user = await this.userModel.create(signupObj);
        return user;
    }
    async requestPasswordReset(email) {
        const user = await this.userModel.findOne({ email }).exec();
        if (!user) {
            throw new common_1.NotFoundException('User with this email does not exist');
        }
        const resetToken = `reset-${Math.random().toString(36).substr(2)}`;
        user.resetToken = resetToken;
        await user.save();
        return { message: 'Password reset link generated', resetToken };
    }
    async resetPassword(resetPasswordDto) {
        const { resetToken, newPassword } = resetPasswordDto;
        const user = await this.userModel.findOne({ resetToken }).exec();
        if (!user) {
            throw new common_1.BadRequestException('Invalid or expired reset token');
        }
        user.password = newPassword;
        user.resetToken = null;
        await user.save();
        return { message: 'Password has been successfully reset' };
    }
    async getUserProfile(userId) {
        const user = await this.userModel.findById(userId).exec();
        if (!user) {
            throw new common_1.NotFoundException(`User with ID ${userId} not found`);
        }
        return user;
    }
    async updateUserProfile(userId, updateUserProfileDto) {
        const updatedUser = await this.userModel.findByIdAndUpdate(userId, updateUserProfileDto, { new: true }).exec();
        if (!updatedUser) {
            throw new common_1.NotFoundException(`User with ID ${userId} not found`);
        }
        return updatedUser;
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
//# sourceMappingURL=users.service.js.map