import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "./auth.service";
import { AuthInput } from './inputs/auth.input';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
    constructor(private readonly _authService: AuthService) {
        super();

        //     {
        //     usernameField: "email",
        //     passwordField: "password",
        //     session: false,
        //     passReqToCallback: true,
        //     }
    }
    
    async validate(_authInput:AuthInput): Promise<any> {
        const user = await this._authService.validateUser(_authInput);
        if (!user) {
            throw new UnauthorizedException();        
            }
        return user;   
        } 
    }
