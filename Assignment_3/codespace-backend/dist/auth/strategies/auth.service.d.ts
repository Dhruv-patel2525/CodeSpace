import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
type AuthInput = {
    email: string;
    password: string;
};
type SignInData = {
    userId: number;
    email: string;
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
}
export {};
