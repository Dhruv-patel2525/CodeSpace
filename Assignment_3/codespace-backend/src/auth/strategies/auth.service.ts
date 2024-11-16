import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare, hash } from 'bcrypt';
import { log } from 'console';
import { UsersService } from 'src/users/users.service';
import { SignupDto } from '../dto/signup.dto';
import { UserRole } from '../enums/roles.enum';

type AuthInput = {email:string,password:string};
type SignInData = {userId:number,email:string,role:UserRole}; 
type AuthResult = {accessToken:string,userId:number,email:string}
type CurrentUser = {userId:number,roles:UserRole[]}
@Injectable()
export class AuthService {
    constructor(private userService:UsersService,private jwtService:JwtService){}
    async authenticate(input:AuthInput):Promise<AuthResult>{
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
    async signIn(user:SignInData):Promise<AuthResult>{
        const payload = { sub: user.userId, username: user.email,role:user.role };
        const accessToken = await this.jwtService.signAsync(payload);
        return {accessToken,userId:user.userId,email:user.email};
    }

    
    async registerUser(signupDto : SignupDto) {
       return this.userService.createUser(signupDto);
      }
    
}
