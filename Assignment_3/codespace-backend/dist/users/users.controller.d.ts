import { LoginDto } from 'src/users/dto/login.dto';
import { UsersService } from './users.service';
import { ResetPasswordDto } from 'src/users/dto/resetpwd.dto';
import { RequestPasswordResetDto } from 'src/users/dto/resetpassword.dto';
import { UpdateUserProfileDto } from './dto/updateUserProfile.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    loginUser(logindto: LoginDto): Promise<{
        message: string;
        user: {
            email: string;
            name: string;
            role: import("../auth/enums/roles.enum").UserRole;
        };
    }>;
    logoutUser(): void;
    forgotPassword(requestPasswordResetDto: RequestPasswordResetDto): Promise<any>;
    requestPasswordReset(requestPasswordResetDto: RequestPasswordResetDto): Promise<any>;
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<any>;
    getUserProfile(userId: string): Promise<import("./schema/user").User>;
    updateUserProfile(userId: string, updateUserProfileDto: UpdateUserProfileDto): Promise<import("./schema/user").User>;
}
