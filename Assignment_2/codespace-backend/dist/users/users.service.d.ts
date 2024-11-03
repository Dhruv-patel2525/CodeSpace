import { LoginDto } from 'src/users/dto/login.dto';
import { ResetPasswordDto } from 'src/users/dto/resetpwd.dto';
import { SignupDto } from 'src/users/dto/signup.dto';
export declare class UsersService {
    private users;
    private resetTokens;
    logoutUser(): void;
    forgotPassword(email: string): Promise<any>;
    loginUser(logindto: LoginDto): Promise<{
        message: string;
        user: {
            email: string;
            name: string;
            role: string;
        };
    }>;
<<<<<<< HEAD
    registerUser(signupDto: SignupDto): {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<any>;
=======
    registerUser(signupDto: SignupDto): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
>>>>>>> origin/Develop-vishwa-nest
    requestPasswordReset(email: string): Promise<any>;
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<any>;
}
