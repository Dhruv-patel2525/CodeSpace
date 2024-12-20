import { Strategy } from "passport-jwt";
import { AuthJwtPayload } from "../types/auth-jwtPayload";
declare const RefreshJwtStrategy_base: new (...args: any[]) => Strategy;
export declare class RefreshJwtStrategy extends RefreshJwtStrategy_base {
    constructor();
    validate(payload: AuthJwtPayload): AuthJwtPayload;
}
export {};
