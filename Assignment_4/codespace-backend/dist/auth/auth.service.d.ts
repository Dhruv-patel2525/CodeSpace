import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { UserRole } from './enums/roles.enum';
import { SignupDto } from './dto/signup.dto';
import { AuthJwtPayload, AuthPayload } from './types/auth-jwtPayload';
import { ChangePasswordDto } from './dto/changepassword.dto';
type AuthInput = {
    email: string;
    password: string;
};
type SignInData = {
    userId: number;
    email: string;
    role: UserRole;
    name: string;
};
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    authenticate(input: AuthInput): Promise<AuthPayload>;
    validateUser(input: AuthInput): Promise<SignInData | null>;
    signIn(user: SignInData): Promise<AuthPayload>;
    registerUser(signupDto: SignupDto): Promise<import("mongoose").Document<unknown, {}, import("../users/schema/user").User> & import("../users/schema/user").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    refreshToken(input: any): Promise<any>;
    logout(user: any): Promise<void>;
    getLastLogout(payload: AuthJwtPayload): Promise<any>;
    changePassword(payload: AuthJwtPayload, changepassworddto: ChangePasswordDto): Promise<any>;
    sendEmailFoPassword(email: string): Promise<void>;
    private sendEmail;
}
export {};
