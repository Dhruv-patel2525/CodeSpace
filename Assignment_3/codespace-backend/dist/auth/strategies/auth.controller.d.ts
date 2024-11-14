import { AuthService } from './auth.service';
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
}
