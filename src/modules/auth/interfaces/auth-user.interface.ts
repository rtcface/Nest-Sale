import { Document } from 'mongoose';

export interface IAuthUser extends Document {
    accessToken: string;
    refreshToken: string;
    userId: string;
    userName: string;
    userEmail: string;
    userRole: string;
    userStatus: string;

}