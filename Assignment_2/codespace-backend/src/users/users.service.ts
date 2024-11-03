<<<<<<< HEAD
import { BadRequestException, Injectable } from '@nestjs/common';
=======
import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
>>>>>>> origin/Develop-vishwa-nest
import { LoginDto } from 'src/users/dto/login.dto';
import { ResetPasswordDto } from 'src/users/dto/resetpwd.dto';
import { SignupDto } from 'src/users/dto/signup.dto';
<<<<<<< HEAD
=======
import { User } from './schema/user';
import { Model } from 'mongoose';
import { UpdateUserProfileDto } from './dto/updateUserProfile.dto';
>>>>>>> origin/Develop-vishwa-nest

@Injectable()
export class UsersService {

    private users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Learner', password: 'password123' },
      ];
      private resetTokens = new Map<string, string>(); 
      
    logoutUser() {
        console.log("User Logged out") // Implement when authentication(JWT) and session are being done
    }

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
  

    async loginUser(logindto: LoginDto) {
      const { email, password } = logindto;
  
      const user = await this.userModel.findOne({ email }).exec();
      if (!user) {
        throw new NotFoundException('User not found');
      }
  
      if (user.password !== password) {
        throw new UnauthorizedException('Invalid credentials');
      }

      return {
        message: 'Login successful',
        user: {
          email: user.email,
          name: user.name,
          role: user.role,
        },
      };
    }
<<<<<<< HEAD
    registerUser(signupDto : SignupDto) {
        const { name, email, role, password, confirmPassword } = signupDto;


    if (password !== confirmPassword) {
      throw new BadRequestException('Passwords do not match');
    }


    const existingUser = this.users.find(user => user.email === email);
    if (existingUser) {
      throw new BadRequestException('Email already registered');
    }

    const newUser = {
      id: this.users.length + 1,
      name,
      email,
      role,
      password, 
    };

    this.users.push(newUser);


    const { password: _, ...result } = newUser;
    return result;
=======
  

    async registerUser(signupDto : SignupDto) {
    const signupObj={email:signupDto.email,name:signupDto.name,role:signupDto.role,password:signupDto.password};
    const user = await this.userModel.create(signupObj);
    return user; 
>>>>>>> origin/Develop-vishwa-nest
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

  async getUserProfile(userId: string): Promise<User> {
    const user = await this.userModel.findById(userId).exec();
    if (!user) {
      throw new NotFoundException(`User with ID ${userId} not found`);
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


}
