import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LoginDto } from 'src/users/dto/login.dto';
import { ResetPasswordDto } from 'src/users/dto/resetpwd.dto';
// import { SignupDto } from 'src/users/dto/signup.dto';
import { User } from './schema/user';
import { Model } from 'mongoose';
import { UpdateUserProfileDto } from './dto/updateUserProfile.dto';
import { hash } from 'bcrypt';
import { SignupDto } from 'src/auth/dto/signup.dto';
import { AuthJwtPayload } from 'src/auth/types/auth-jwtPayload';
@Injectable()
export class UsersService {
   
   
   
      constructor(@InjectModel(User.name) private readonly userModel:Model<User>){}

      private users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Learner', password: 'password123' },
      ];
      private resetTokens = new Map<string, string>(); 
      
   

    async forgotPassword(email: string): Promise<any> {
      const user = await this.userModel.findOne({ email }).exec();
      if (!user) {
        throw new NotFoundException('User with this email does not exist');
      }
  
      const resetToken = `reset-${Math.random().toString(36).substr(2)}`;
      user.resetToken = resetToken;
      await user.save();
  
      return { message: 'Password reset link has been sent', resetToken };
    }
  

    
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

  async requestPasswordReset(email: string): Promise<any> {
    
    const user = await this.userModel.findOne({ email }).exec();
    if (!user) {
      throw new NotFoundException('User with this email does not exist');
    }

    const resetToken = `reset-${Math.random().toString(36).substr(2)}`;

    user.resetToken = resetToken;
    await user.save();

    return { message: 'Password reset link generated', resetToken };
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto): Promise<any> {
    const { resetToken, newPassword } = resetPasswordDto;

    const user = await this.userModel.findOne({ resetToken }).exec();
    if (!user) {
      throw new BadRequestException('Invalid or expired reset token');
    }

    user.password = newPassword;
    user.resetToken = null;  
    await user.save();

    return { message: 'Password has been successfully reset' };
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
