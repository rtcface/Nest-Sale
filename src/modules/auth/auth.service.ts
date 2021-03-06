import { Injectable } from '@nestjs/common';

import { UserService } from '../user/user.service';
import { AuthInput } from './inputs/auth.input';

import { IUser } from '../user/interfaces/user.interface';
import { JwtService } from '@nestjs/jwt';
import { JWT_SECRET_TOKEN } from 'src/server.constants';
import { IAuthUser } from './interfaces/auth-user.interface';
import * as bcrypt from 'bcrypt';



@Injectable()
export class AuthService {

    constructor( 
        private readonly _userService: UserService ,
        private readonly _jwtService: JwtService,
    ) {}
       

    async validateUser( authInput:AuthInput ): Promise<IUser | null> {
      
        const { email, password } = authInput;

        const user = await this._userService.getUserByEmail(email);
       
        if(user && password){
            const ismatch = await bcrypt.compare(password, user.password);
            if(ismatch){
                const { ...result } = user;
                return user;
            }

        }
        return null;
    }

    async login(user: IAuthUser): Promise< { access_token: string } >{
        const payload = { 
            email: user.userEmail,
            sub: user.id
         };
        return {
            access_token: this._jwtService.sign(payload),
        };
    }

    async verify(token: string): Promise<any> {
        console.log('pase por verify');
        const decode= this._jwtService.verify(token,
            { secret: JWT_SECRET_TOKEN });
        
        const user = await this._userService.getUserByEmail(decode.email);
       
        
    }






}
