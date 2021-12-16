import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategies';

import { JwtModule } from '@nestjs/jwt';
import { JWT_SECRET_TOKEN } from '../../server.constants';
import { JwtStrategy } from './strategies';
import { AuthController } from './auth.controller';



@Module({
  imports: [
    UserModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.register({
      secret: JWT_SECRET_TOKEN,
      signOptions: { expiresIn: '3600s' },
    }),
  ],
  controllers: [ AuthController ],
  providers: [AuthService, LocalStrategy, JwtStrategy],
})
export class AuthModule {}
