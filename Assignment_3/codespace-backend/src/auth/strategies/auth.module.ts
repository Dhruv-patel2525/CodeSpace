import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from '../configs/constants';
import { APP_GUARD } from '@nestjs/core';
import { AuthGuard } from '../guards/auth.guards';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { log } from 'console';

log("JWT_Scret"+process.env.secret);
@Module({
  controllers: [AuthController],
  providers: [AuthService,
    // {
    //   provide:APP_GUARD,
    //   useClass:AuthGuard
    // }
  ],
  imports:[ConfigModule.forRoot(),
    UsersModule, 
    JwtModule.register({
    global: true,
    secret: process.env.secret,
    signOptions: { expiresIn: '1h' },
  }),PassportModule],
})
export class AuthModule {}

