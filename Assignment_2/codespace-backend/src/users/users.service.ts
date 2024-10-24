import { BadRequestException, Injectable } from '@nestjs/common';
import { LoginDto } from 'src/dto/login.dto';
import { ResetPasswordDto } from 'src/dto/resetpwd.dto';
import { SignupDto } from 'src/dto/signup.dto';

@Injectable()
export class UsersService {

    private users = [
        { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Learner', password: 'password123' },
      ];
      private resetTokens = new Map<string, string>(); 
      
    logoutUser() {
        throw new Error('Method not implemented.');
    }

    

    
    forgotpassword() {
        throw new Error('Method not implemented.');
    }

    async loginUser(logindto: LoginDto) {
       const {email,password} = logindto;

       const user = this.users.find(user => user.email === email);

       if (!user) {
        return { message: 'User not found' };
      }
  
      if (user.password !== password) {
        return { message: 'Invalid credentials' };
      }
  

      return {
        message: 'Login successful',
        user: {
          id: user.id,
          email: user.email,
        },
      };

    }
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
  }

  async resetPassword(resetPasswordDto: ResetPasswordDto): Promise<any> {
    const { resetToken, newPassword } = resetPasswordDto;

    const email = this.resetTokens.get(resetToken);
    if (!email) {
      throw new Error('Invalid or expired reset token');
    }

    const user = this.users.find(user => user.email === email);
    if (!user) {
      throw new Error('User not found');
    }

    user.password = newPassword;

    this.resetTokens.delete(resetToken);

    return { message: 'Password has been successfully reset' };
  }

  async requestPasswordReset(email: string): Promise<any> {
    const user = this.users.find((user) => user.email === email);
    if (!user) {
      throw new Error('User with this email does not exist');
    }

    const resetToken = `reset-${Math.random().toString(36).substr(2)}`;
    
    this.resetTokens.set(resetToken, email);
    return { message: 'Password reset link generated', resetToken };
  }



}
