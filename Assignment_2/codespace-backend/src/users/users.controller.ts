import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from 'src/users/dto/login.dto';
import { UsersService } from './users.service';
import { SignupDto } from 'src/users/dto/signup.dto';
import { ResetPasswordDto } from 'src/users/dto/resetpwd.dto';
import { RequestPasswordResetDto } from 'src/users/dto/resetpassword.dto';

@Controller('auth')
export class UsersController {

    constructor(private readonly userService: UsersService) {}

    @Post('registerUser')
    registerUser(@Body() signup : SignupDto)
    {
        return this.userService.registerUser(signup);
    }

    @Post('loginUser')
    loginUser(@Body() logindto: LoginDto)
    {
        return this.userService.loginUser(logindto);
    }

    @Post('logoutuser')
    logoutUser()
    {
        return this.userService.logoutUser();
    }

    @Post('forgotPassword')
    forgotpassword()
    {
        return this.userService.forgotpassword();
    }
    
  @Post('requestPasswordReset')
  async requestPasswordReset(@Body() requestPasswordResetDto: RequestPasswordResetDto) {
    return this.userService.requestPasswordReset(requestPasswordResetDto.email);
  }

  @Post('resetPassword')
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return this.userService.resetPassword(resetPasswordDto);
  }
}
