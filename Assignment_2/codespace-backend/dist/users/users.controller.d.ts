import { LoginDto } from 'src/users/dto/login.dto';
import { UsersService } from './users.service';
import { SignupDto } from 'src/users/dto/signup.dto';
import { ResetPasswordDto } from 'src/users/dto/resetpwd.dto';
import { RequestPasswordResetDto } from 'src/users/dto/resetpassword.dto';
import { UpdateUserProfileDto } from './dto/updateUserProfile.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    registerUser(signup: SignupDto): Promise<import("mongoose").Document<unknown, {}, import("./schema/user").User> & import("./schema/user").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    loginUser(logindto: LoginDto): Promise<{
        message: string;
        user: {
            email: string;
            name: string;
            role: string;
        };
    }>;
    logoutUser(): void;
    forgotPassword(requestPasswordResetDto: RequestPasswordResetDto): Promise<any>;
    requestPasswordReset(requestPasswordResetDto: RequestPasswordResetDto): Promise<any>;
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<any>;
    getUserProfile(userId: string): Promise<import("./schema/user").User>;
    updateUserProfile(userId: string, updateUserProfileDto: UpdateUserProfileDto): Promise<import("./schema/user").User>;
}
