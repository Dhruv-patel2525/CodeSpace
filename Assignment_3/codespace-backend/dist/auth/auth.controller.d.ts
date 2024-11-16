import { SignupDto } from './dto/signup.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    loginUser(logindto: {
        email: string;
        password: string;
    }): Promise<import("./types/auth-jwtPayload").AuthPayload>;
    registerUser(signup: SignupDto): Promise<import("mongoose").Document<unknown, {}, import("../users/schema/user").User> & import("../users/schema/user").User & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }>;
    refreshToken(req: any): Promise<any>;
    logout(req: any): Promise<void>;
}
