import { LoginDto } from 'src/users/dto/login.dto';
import { ResetPasswordDto } from 'src/users/dto/resetpwd.dto';
import { User } from './schema/user';
import { Model } from 'mongoose';
import { UpdateUserProfileDto } from './dto/updateUserProfile.dto';
import { SignupDto } from 'src/auth/dto/signup.dto';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    private users;
    private resetTokens;
    logoutUser(): void;
    forgotPassword(email: string): Promise<any>;
    loginUser(logindto: LoginDto): Promise<{
        message: string;
        user: {
            email: string;
            name: string;
            role: import("../auth/enums/roles.enum").UserRole;
        };
    }>;
    hashPassword(password: string): Promise<string>;
    createUser(signupDto: SignupDto): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    requestPasswordReset(email: string): Promise<any>;
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<any>;
    getUserProfile(email: string): Promise<User>;
    updateUserProfile(userId: string, updateUserProfileDto: UpdateUserProfileDto): Promise<User>;
    logout(email: string): Promise<void>;
    getLastLogout(email: string): Promise<any>;
}
