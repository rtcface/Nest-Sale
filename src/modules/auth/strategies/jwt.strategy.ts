import { Injectable } from "@nestjs/common";
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from "passport-jwt";
import { IUser } from "src/modules/user/interfaces/user.interface";
import { UserService } from "src/modules/user/user.service";
import { JWT_SECRET_TOKEN } from "src/server.constants";


@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor( private readonly _userService: UserService ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExperation: false,
            secretOrKey: JWT_SECRET_TOKEN
        });
    }

    async validate(payload: { email: string,  sub: string }): Promise<IUser | null> {
        console.log('pase por validate jwt'+ payload.sub);
        
        const user = await this._userService.getUser(payload.sub);
        if (user) {
            return user;
        }
        return null;
    }
}

