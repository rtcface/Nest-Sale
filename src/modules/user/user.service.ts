import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { UserInput } from './inputs/user.input';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<IUser>) { }
    
    async createUser(userInput:UserInput): Promise<IUser> {
        const createdUser = new this.userModel(userInput);
        return await createdUser.save();
    }

    async getUsers(): Promise<IUser[]> {
        return await this.userModel.find().exec();
    }
    
    
}
