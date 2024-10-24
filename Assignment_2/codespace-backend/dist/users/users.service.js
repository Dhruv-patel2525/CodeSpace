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
    (0, common_1.Injectable)()
], UsersService);
//# sourceMappingURL=users.service.js.map