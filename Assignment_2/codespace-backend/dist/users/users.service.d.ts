import { LoginDto } from 'src/dto/login.dto';
import { ResetPasswordDto } from 'src/dto/resetpwd.dto';
import { SignupDto } from 'src/dto/signup.dto';
export declare class UsersService {
    private users;
    private resetTokens;
    logoutUser(): void;
    forgotpassword(): void;
    loginUser(logindto: LoginDto): Promise<{
        message: string;
        user?: undefined;
    } | {
        message: string;
        user: {
            id: number;
            email: string;
        };
    }>;
    registerUser(signupDto: SignupDto): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<any>;
    requestPasswordReset(email: string): Promise<any>;
}
