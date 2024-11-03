"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
let UsersService = class UsersService {
    constructor() {
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
    registerUser(signupDto) {
        const { name, email, role, password, confirmPassword } = signupDto;
        if (password !== confirmPassword) {
            throw new common_1.BadRequestException('Passwords do not match');
        }
        const existingUser = this.users.find(user => user.email === email);
        if (existingUser) {
            throw new common_1.BadRequestException('Email already registered');
        }
        const newUser = {
            id: this.users.length + 1,
            name,
            email,
            role,
            password,
        };
        this.users.push(newUser);
        const { password: _, ...result } = newUser;
        return result;
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
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map