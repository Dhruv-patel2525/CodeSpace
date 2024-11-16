import { PassportStrategy } from "@nestjs/passport";
import {ExtractJwt,Strategy} from "passport-jwt";
import { AuthJwtPayload } from "../types/auth-jwtPayload";
import { Injectable } from "@nestjs/common";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor()
    {
        super(
            {
                jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey:process.env.JWT_SECRET,
                ignoreExpiration:false,
            }
        )
    }
    validate(payload:AuthJwtPayload)
    {
        return payload;
    }
}