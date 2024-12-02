import { PassportStrategy } from "@nestjs/passport";
import {ExtractJwt,Strategy} from "passport-jwt";
import { AuthJwtPayload } from "../types/auth-jwtPayload";
import { Injectable, UnauthorizedException } from "@nestjs/common";
import { AuthService } from "../auth.service";
import { log } from "console";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(private authService:AuthService)
    {
        super(
            {
                jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
                secretOrKey:process.env.JWT_SECRET,
                ignoreExpiration:false,
            }
        )
    }
    async validate(payload:AuthJwtPayload)
    {
        const lastLogout:Date =  await this.authService.getLastLogout(payload);

        if (payload.iat < Math.floor(lastLogout.getTime() / 1000)) {
            throw new UnauthorizedException('Already Logged Out');
          }
        log("Payload jwt strategy "+payload);
        return payload;
    }
}