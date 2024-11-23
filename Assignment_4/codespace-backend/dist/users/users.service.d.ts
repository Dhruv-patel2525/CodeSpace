import { User } from './schema/user';
import { Model } from 'mongoose';
import { UpdateUserProfileDto } from './dto/updateUserProfile.dto';
import { SignupDto } from 'src/auth/dto/signup.dto';
import { AuthJwtPayload } from 'src/auth/types/auth-jwtPayload';
export declare class UsersService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    hashPassword(password: string): Promise<string>;
    createUser(signupDto: SignupDto): Promise<import("mongoose").Document<unknown, {}, User> & User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    getUserProfile(email: string): Promise<User>;
    updateUserProfile(userId: string, updateUserProfileDto: UpdateUserProfileDto): Promise<User>;
    logout(email: string): Promise<void>;
    getLastLogout(email: string): Promise<any>;
    updatePassword(payload: AuthJwtPayload, newpassword: string): Promise<any>;
}
