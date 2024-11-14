import { Body, Controller, Get, NotFoundException, Post, Put, Query, Req } from '@nestjs/common';
import { LoginDto } from 'src/users/dto/login.dto';
import { UsersService } from './users.service';
import { SignupDto } from 'src/users/dto/signup.dto';
import { ResetPasswordDto } from 'src/users/dto/resetpwd.dto';
import { RequestPasswordResetDto } from 'src/users/dto/resetpassword.dto';
import { UpdateUserProfileDto } from './dto/updateUserProfile.dto';

@Controller('user')
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
    async forgotPassword(@Body() requestPasswordResetDto: RequestPasswordResetDto) {
      return this.userService.forgotPassword(requestPasswordResetDto.email);
    }
    
  @Post('requestPasswordReset')
  async requestPasswordReset(@Body() requestPasswordResetDto: RequestPasswordResetDto) {
    return this.userService.requestPasswordReset(requestPasswordResetDto.email);
  }

  @Post('resetPassword')
  async resetPassword(@Body() resetPasswordDto: ResetPasswordDto) {
    return this.userService.resetPassword(resetPasswordDto);
  }

  @Get('profile')
  async getUserProfile(@Query('userId') userId: string) {
    if (!userId) {
      throw new NotFoundException('User ID is required');
    }
    return this.userService.getUserProfile(userId);
  }


  @Put('profile')
  async updateUserProfile(@Query('userId') userId: string, @Body() updateUserProfileDto: UpdateUserProfileDto) {
    if (!userId) {
      throw new NotFoundException('User ID is required');
    }
    return this.userService.updateUserProfile(userId, updateUserProfileDto);
  }


}
