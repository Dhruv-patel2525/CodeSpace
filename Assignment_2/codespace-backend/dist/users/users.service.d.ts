import { LoginDto } from 'src/users/dto/login.dto';
import { ResetPasswordDto } from 'src/users/dto/resetpwd.dto';
import { SignupDto } from 'src/users/dto/signup.dto';
import { User } from './schema/user';
import { Model } from 'mongoose';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    private users;
    private resetTokens;
    logoutUser(): void;
    forgotpassword(): void;
    loginUser(logindto: LoginDto): Promise<{
        message: string;
        user: {
            email: string;
            name: string;
            role: string;
        };
    }>;
    registerUser(signupDto: SignupDto): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    requestPasswordReset(email: string): Promise<any>;
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<any>;
}
