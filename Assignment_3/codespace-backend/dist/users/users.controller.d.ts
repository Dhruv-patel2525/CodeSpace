import { UsersService } from './users.service';
import { ResetPasswordDto } from 'src/users/dto/resetpwd.dto';
import { RequestPasswordResetDto } from 'src/users/dto/resetpassword.dto';
import { UpdateUserProfileDto } from './dto/updateUserProfile.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    forgotPassword(requestPasswordResetDto: RequestPasswordResetDto): Promise<any>;
    requestPasswordReset(requestPasswordResetDto: RequestPasswordResetDto): Promise<any>;
    resetPassword(resetPasswordDto: ResetPasswordDto): Promise<any>;
    getUserProfile(userId: string): Promise<import("./schema/user").User>;
    updateUserProfile(userId: string, updateUserProfileDto: UpdateUserProfileDto): Promise<import("./schema/user").User>;
}
