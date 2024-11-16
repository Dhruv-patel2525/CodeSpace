import { Body, Controller, HttpCode, HttpStatus, Post, Req, UseGuards } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { AuthService } from './auth.service';
import { RefreshAuthGuard } from './guards/refresh-auth/refresh-auth.guard';
import { log } from 'console';
import { JwtAuthGuard } from './guards/jwt-auth/jwt-auth.guard';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {  
  }
   @HttpCode(HttpStatus.OK)
   @Post('login')
    loginUser(@Body() logindto: {email:string; password:string})
    {
        return this.authService.authenticate(logindto);
    }

    
    @Post('registerUser')
    registerUser(@Body() signup : SignupDto)
    {
        return this.authService.registerUser(signup);
    }

    @UseGuards(RefreshAuthGuard)
    @Post('refresh')
    refreshToken(@Req() req)
    {
        return this.authService.refreshToken(req.user);
    }

    @UseGuards(JwtAuthGuard)
    @Post('logout')
    logout(@Req() req)
    {
        log(req.user);
        return this.authService.logout(req.user);
    }
}


