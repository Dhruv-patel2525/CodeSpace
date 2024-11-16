import { AuthService } from './auth.service';
import { SignupDto } from '../dto/signup.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    loginUser(logindto: {
        email: string;
        password: string;
    }): Promise<{
        accessToken: string;
        userId: number;
        email: string;
    }>;
    registerUser(signup: SignupDto): Promise<import("mongoose").Document<unknown, {}, import("../../users/schema/user").User> & import("../../users/schema/user").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
}
