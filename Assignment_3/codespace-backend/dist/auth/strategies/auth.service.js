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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const bcrypt_1 = require("bcrypt");
const users_service_1 = require("../../users/users.service");
let AuthService = class AuthService {
    constructor(userService, jwtService) {
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async authenticate(input) {
        const user = await this.validateUser(input);
        if (!user) {
            throw new common_1.UnauthorizedException("Invalid Credentials");
        }
        return this.signIn(user);
    }
    async validateUser(input) {
        const user = await this.userService.getUserProfile(input.email);
        const isPasswordMatch = await (0, bcrypt_1.compare)(input.password, user?.password);
        if (user && isPasswordMatch) {
            return {
                userId: user.userId,
                email: user.email,
            };
        }
        return null;
    }
    async signIn(user) {
        const payload = { sub: user.userId, username: user.email };
        const accessToken = await this.jwtService.signAsync(payload);
        return { accessToken, userId: user.userId, email: user.email };
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [users_service_1.UsersService, jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map