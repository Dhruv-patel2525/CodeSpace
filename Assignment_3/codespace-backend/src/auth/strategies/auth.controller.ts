import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {  
  }
  @Post('login')
    loginUser(@Body() logindto: {email:string; password:string})
    {
        return this.authService.authenticate(logindto);
    }
}


