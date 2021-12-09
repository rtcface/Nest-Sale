import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';
import { UserService } from '../user/user.service';
import { AuthResolver } from './auth.resolver';


@Module({
  imports: [UserModule,PassportModule],
  providers: [AuthService, LocalStrategy, AuthResolver],
})
export class AuthModule {}
