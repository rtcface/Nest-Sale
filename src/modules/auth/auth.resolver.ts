import { UseGuards } from '@nestjs/common';
import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { authenticate } from 'passport';
import { AuthService } from './auth.service';
import { AuthInput } from './inputs/auth.input';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthDto } from './dtos/auth.dto';


@Resolver()
export class AuthResolver {
    constructor( private _authSevice: AuthService ) {}
    @UseGuards( LocalAuthGuard )
    @Mutation( () => AuthDto )
    async authUser( @Args( 'userAuth' ) authInput: AuthInput ) {
        return this._authSevice.validateUser( authInput );
    }

}
