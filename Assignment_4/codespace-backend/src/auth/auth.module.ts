import { Module } from '@nestjs/common';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { APP_GUARD } from '@nestjs/core';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { log } from 'console';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './strategies/jwt.strategy';
import { RefreshJwtStrategy } from './strategies/refresh.startegy';
// import { RedisModule } from 'nestjs-redis';
@Module({
  controllers: [AuthController],
  providers: [AuthService,JwtStrategy,RefreshJwtStrategy
    // {
    //   provide:APP_GUARD,
    //   useClass:AuthGuard
    // }
  ],
  imports:[ConfigModule.forRoot(),
    UsersModule, 
    JwtModule.register({
    global: true,
    secret: process.env.JWT_SECRET,
    signOptions: { expiresIn: process.env.JWT_EXPIRE_IN },
  }),PassportModule],
})
export class AuthModule {}

