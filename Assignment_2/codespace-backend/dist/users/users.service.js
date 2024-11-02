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
        throw new Error('Method not implemented.');
    }
    forgotpassword() {
        throw new Error('Method not implemented.');
    }
    async loginUser(logindto) {
        const { email, password } = logindto;
        const user = this.users.find(user => user.email === email);
        if (!user) {
            return { message: 'User not found' };
        }
        if (user.password !== password) {
            return { message: 'Invalid credentials' };
        }
        return {
            message: 'Login successful',
            user: {
                id: user.id,
                email: user.email,
            },
        };
    }
    async registerUser(signupDto) {
        const signupObj = { email: signupDto.email, name: signupDto.name, role: signupDto.role, password: signupDto.password };
        const user = await this.userModel.create(signupObj);
        return user;
    }
    async resetPassword(resetPasswordDto) {
        const { resetToken, newPassword } = resetPasswordDto;
        const email = this.resetTokens.get(resetToken);
        if (!email) {
            throw new Error('Invalid or expired reset token');
        }
        const user = this.users.find(user => user.email === email);
        if (!user) {
            throw new Error('User not found');
        }
        user.password = newPassword;
        this.resetTokens.delete(resetToken);
        return { message: 'Password has been successfully reset' };
    }
    async requestPasswordReset(email) {
        const user = this.users.find((user) => user.email === email);
        if (!user) {
            throw new Error('User with this email does not exist');
        }
        const resetToken = `reset-${Math.random().toString(36).substr(2)}`;
        this.resetTokens.set(resetToken, email);
        return { message: 'Password reset link generated', resetToken };
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(user_1.User.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], UsersService);
//# sourceMappingURL=users.service.js.map