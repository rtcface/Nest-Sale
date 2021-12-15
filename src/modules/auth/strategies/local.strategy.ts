import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { AuthInput } from '../inputs/auth.input';
import { IUser } from '../../user/interfaces/user.interface';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(
        private readonly _authService: AuthService,    
        ) {
        super({
            usernameField: 'email',
            passwordField: "password",
        });

        //     {
        //     usernameField: "email",
        //     passwordField: "password",
        //     session: false,
        //     passReqToCallback: true,
        //     }
    }
    
    async validate(email:string, password:string): Promise<IUser> {
        const autInp: AuthInput = {email: email, password: password};
        console.log('Dato Recibido-'+autInp);
        const user = await this._authService.validateUser(autInp);
        console.log('validate '+user);
        if (!user) {
            throw new UnauthorizedException('Usuario o contraseña incorrectos');        
            }
        return user;   
        } 
    }
