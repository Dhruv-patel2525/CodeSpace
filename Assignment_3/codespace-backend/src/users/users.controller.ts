import { Body, Controller, Get, NotFoundException, Post, Put, Query, Req } from '@nestjs/common';
import { LoginDto } from 'src/users/dto/login.dto';
import { UsersService } from './users.service';
// import { SignupDto } from 'src/users/dto/signup.dto';
import { ResetPasswordDto } from 'src/users/dto/resetpwd.dto';
import { RequestPasswordResetDto } from 'src/users/dto/resetpassword.dto';
import { UpdateUserProfileDto } from './dto/updateUserProfile.dto';

@Controller('user')
export class UsersController {

    constructor(private readonly userService: UsersService) {}

   

    

   

   

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
