import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compare } from 'bcrypt';
import { UsersService } from 'src/users/users.service';
import { UserRole } from './enums/roles.enum';
import { SignupDto } from './dto/signup.dto';
import { AuthJwtPayload, AuthPayload } from './types/auth-jwtPayload';
import { ChangePasswordDto } from './dto/changepassword.dto';

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
    async changePassword(payload: AuthJwtPayload, changepassworddto: ChangePasswordDto):Promise<any> {
        //console.log(payload);
        const user=await this.userService.getUserProfile(payload.username);
        //console.log(changepassworddto.oldPassword);
        const isMatched = await compare(changepassworddto.oldPassword,user.password);
        //console.log(isMatched);
        if(!isMatched)
        {
            throw new UnauthorizedException("Old Password not matched");
        }
        return await this.userService.updatePassword(payload,changepassworddto.newPassword);
        
    }
    async sendEmailFoPassword(email: string) {
        const user= await this.userService.getUserProfile(email);
        if (!user) {
            throw new NotFoundException('User not found');
          }
      
    const payload:AuthJwtPayload = { sub: user.userId, 
            username: user.email,
            role:user.role, 
            iat: Math.floor(Date.now() / 1000)};
          const resetToken = await this.jwtService.signAsync(payload);
          await this.sendEmail(user.email, resetToken);
    }
    private async sendEmail(email: string, content: string) {
        // Replace with actual email-sending logic
        console.log(`Email sent to ${email}: ${content}`);
      }
}
