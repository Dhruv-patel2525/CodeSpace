import { UsersService } from './users.service';
import { UpdateUserProfileDto } from './dto/updateUserProfile.dto';
export declare class UsersController {
    private readonly userService;
    constructor(userService: UsersService);
    getUserProfile(userId: string): Promise<import("./schema/user").User>;
    updateUserProfile(userId: string, updateUserProfileDto: UpdateUserProfileDto): Promise<import("./schema/user").User>;
}
