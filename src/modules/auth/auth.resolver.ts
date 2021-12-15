import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { authenticate } from 'passport';
import { AuthService } from './auth.service';
import { AuthInput } from './inputs/auth.input';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { AuthDto } from './dtos/auth.dto';
import { IUser } from '../user/interfaces/user.interface';
import { UserDto } from '../user/dtos/user.dto';


@Resolver()
export class AuthResolver {
    constructor( private _authSevice: AuthService ) {}


   
    @Mutation( () => UserDto )
    async authUser( @Args( 'authInput' ) authInput: AuthInput ) {
        return await this._authSevice.validateUser( authInput );
    }

}
