import { LoginDto } from 'src/users/dto/login.dto';
import { UsersService } from './users.service';
import { SignupDto } from 'src/users/dto/signup.dto';
import { ResetPasswordDto } from 'src/users/dto/resetpwd.dto';
import { RequestPasswordResetDto } from 'src/users/dto/resetpassword.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    registerUser(signup: SignupDto): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
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
    logoutUser(): void;
    forgotpassword(): void;
    requestPasswordReset(requestPasswordResetDto: RequestPasswordResetDto): Promise<any>;
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<any>;
}
