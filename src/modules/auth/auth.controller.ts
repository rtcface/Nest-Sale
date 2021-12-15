import { Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { Request } from 'express';

import { IAuthUser } from './interfaces/auth-user.interface';

@Controller("auth")
export class AuthController {
    constructor( private readonly _authService:AuthService ) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')

    async login(@Req() req: Request): Promise<{ access_token: string }> {
        console.log('pase por aqui'+req.user);
        return await this._authService.login(req.user as IAuthUser);
    }

}
