import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { LoginDto } from 'src/users/dto/login.dto';
import { ResetPasswordDto } from 'src/users/dto/resetpwd.dto';
import { SignupDto } from 'src/users/dto/signup.dto';
import { User } from './schema/user';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {

  constructor(@InjectModel(User.name) private readonly userModel:Model<User>){}

    private users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Learner', password: 'password123' },
      ];
      private resetTokens = new Map<string, string>(); 
      
    logoutUser() {
        throw new Error('Method not implemented.'); // Implement when authentication and session are being done
    }

    

    
    forgotpassword() {
        throw new Error('Method not implemented.'); // Implement when authentication and session are being done
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
  

    async registerUser(signupDto : SignupDto) {
    const signupObj={email:signupDto.email,name:signupDto.name,role:signupDto.role,password:signupDto.password};
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



}
