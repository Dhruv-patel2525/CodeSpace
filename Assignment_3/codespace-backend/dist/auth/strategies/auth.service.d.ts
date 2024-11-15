import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import { SignupDto } from '../dto/signup.dto';
import { UserRole } from '../enums/roles.enum';
type AuthInput = {
    email: string;
    password: string;
};
type SignInData = {
    userId: number;
    email: string;
    role: UserRole;
};
type AuthResult = {
    accessToken: string;
    userId: number;
    email: string;
};
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UsersService, jwtService: JwtService);
    authenticate(input: AuthInput): Promise<AuthResult>;
    validateUser(input: AuthInput): Promise<SignInData | null>;
    signIn(user: SignInData): Promise<AuthResult>;
    registerUser(signupDto: SignupDto): Promise<import("mongoose").Document<unknown, {}, import("../../users/schema/user").User> & import("../../users/schema/user").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
export {};
