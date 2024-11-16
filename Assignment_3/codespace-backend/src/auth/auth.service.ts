import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { log } from 'console';
import { UsersService } from 'src/users/users.service';
import { UserRole } from './enums/roles.enum';
import { SignupDto } from './dto/signup.dto';
import { AuthJwtPayload, AuthPayload } from './types/auth-jwtPayload';

type AuthInput = {email:string,password:string};
type SignInData = {userId:number,email:string,role:UserRole}; 
type CurrentUser = {userId:number,roles:UserRole[]}
@Injectable()
export class AuthService {
   
   
    constructor(private userService:UsersService,private jwtService:JwtService){}
    async authenticate(input:AuthInput):Promise<AuthPayload>{
        const user =  await this.validateUser(input);
        if(!user)
        {
            throw new UnauthorizedException("Invalid Credentials");
        }

        return this.signIn(user);

    }
    async validateUser(input:AuthInput):Promise<SignInData | null>{
        const user = await this.userService.getUserProfile(input.email);
        const isPasswordMatch=await compare(input.password,user?.password);
       // log(user?.password+" "+input.password);
        //log(process.env.secret);

        if(user && isPasswordMatch)
        {
            return {
                userId:user.userId,
                email:user.email,
                role:user.role,
            }
        }
        
        return null;
    }
    async signIn(user:SignInData):Promise<AuthPayload>{
        const payload:AuthJwtPayload = { sub: user.userId, 
                                         username: user.email,
                                         role:user.role, 
                                         iat: Math.floor(Date.now() / 1000)};
        const accessToken = await this.jwtService.signAsync(payload);
        const refreshToken = await this.jwtService.signAsync(payload,{secret: process.env.REFRESH_JWT_SECRET,
                                                                     expiresIn: process.env.REFRESH_JWT_EXPIRE_IN ,
          })
        return {accessToken,refreshToken,userId:user.userId,email:user.email};
    }

    
    async registerUser(signupDto : SignupDto) {
       return this.userService.createUser(signupDto);
      }
    
    async refreshToken(input):Promise<any> {
        // log(user.sub)
        const user = await this.userService.getUserProfile(input.username);
        const payload:AuthJwtPayload = {sub:user.userId,username:user.email,role:user.role,iat: Math.floor(Date.now() / 1000)};
        const accessToken = await this.jwtService.signAsync(payload);
        
        return {accessToken,userId:user.userId,email:user.email};
    }
    async logout(user): Promise<void> {
        await this.userService.logout(user.username);

        // {
        //     username: 'coder@gmail.com',
        //     role: 'coder',
        //     iat: 1731785359,
        //     exp: 1731788959
        //   }
       // await this.userModel.findByIdAndUpdate(userId, { lastLogout: new Date() });
      }
    async getLastLogout(payload:AuthJwtPayload):Promise<any> {
        return this.userService.getLastLogout(payload.username);
        
    }
}
