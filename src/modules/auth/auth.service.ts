import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { AuthInput } from './inputs/auth.input';

@Injectable()
export class AuthService {

    constructor( private _userService: UserService  ) {}

    async validateUser( _authInput:AuthInput ): Promise<any> {
        const user = await this._userService.getUserByEmail(_authInput.email);
        if (user && user.password === _authInput.password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }



}
