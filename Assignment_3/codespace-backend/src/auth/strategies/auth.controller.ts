import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignupDto } from '../dto/signup.dto';
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {  
  }
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
}


