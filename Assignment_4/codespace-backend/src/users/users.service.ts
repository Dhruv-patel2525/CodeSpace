import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LoginDto } from 'src/users/dto/login.dto';
import { ResetPasswordDto } from 'src/users/dto/resetpwd.dto';
// import { SignupDto } from 'src/users/dto/signup.dto';
import { User } from './schema/user';
import { Model } from 'mongoose';
import { UpdateUserProfileDto } from './dto/updateUserProfile.dto';
import { hash } from 'bcryptjs';
import { SignupDto } from 'src/auth/dto/signup.dto';
import { AuthJwtPayload } from 'src/auth/types/auth-jwtPayload';
@Injectable()
export class UsersService {
   
   
   
  constructor(@InjectModel(User.name) private readonly userModel:Model<User>){}

     
      
   

    

    
  async hashPassword(password: string): Promise<string>
  {
    const saltOrRounds=10;
    const pass = hash(password,saltOrRounds);
    return pass;
  }
 
  async createUser(signupDto:SignupDto)
  {
    const hashedPassword = await this.hashPassword(signupDto.password);
    const signupObj={email:signupDto.email,
                      name:signupDto.name,
                      role:signupDto.role,
                      password:hashedPassword};
    const user = await this.userModel.create(signupObj);
    return user; 

  }

 
 

  async getUserProfile(email: string): Promise<User> {
    const user = await this.userModel.findOne({email}).exec();
    if (!user) {
      throw new UnauthorizedException(`Email  ${email} not found`);
    }
    return user;
  }

  
  async updateUserProfile(userId: string, updateUserProfileDto: UpdateUserProfileDto): Promise<User> {
    const updatedUser = await this.userModel.findByIdAndUpdate(userId, updateUserProfileDto, { new: true }).exec();
    if (!updatedUser) {
      throw new NotFoundException(`User with ID ${userId} not found`);
    }
    return updatedUser;
  }

  async logout(email:string):Promise<void>
  {
    const user = await this.userModel.findOneAndUpdate(
      { email }, 
      { $set: { lastLogout: new Date() } },) // Update operation
      .exec();// Return the updated documen
     
  }
  async getLastLogout(email: string):Promise<any>{
    const user= await this.userModel.findOne({email}).exec();
    return user.lastLogout;
  }
  async updatePassword(payload: AuthJwtPayload, newpassword: string):Promise<any>{
    const email=payload.username;
    const hashedPassword = await this.hashPassword(newpassword);
    const user = await this.userModel.findOneAndUpdate(
      { email }, 
      { $set: { password: hashedPassword } },) 
      .exec();
    return user; 
  }

}
