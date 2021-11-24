import { Document } from 'mongoose';

export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    status: string;
    avatar: string;
    role: string;
    createByGoogle: boolean;
    createByFacebook: boolean;
    createByEmail: boolean;
    createByTwitter: boolean;
}
