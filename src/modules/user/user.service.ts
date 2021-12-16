import { ConflictException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IUser } from './interfaces/user.interface';
import { Model } from 'mongoose';
import { UserInput } from './inputs/user.input';
import * as bcrypt from 'bcrypt';


@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<IUser>) { }
    
    async createUser(userInput:UserInput): Promise<IUser> { 
        
        const {name,email,password} = userInput;
       
        const userExists = await this.getUserByEmailString(email);
        if (userExists) {
          throw new ConflictException('username already exists');
        }
    
        
        const salt = await bcrypt.genSaltSync(10);

        const hash = await bcrypt.hash(password, salt);

        const createdUser = new this.userModel({
            name,
            email,
            password: hash
        });   
       
        return await createdUser.save();
    }

    async getUsers(): Promise<IUser[]> {
        return await this.userModel.find().exec();
    }

    async getUser(id: string): Promise<IUser> {
        return await this.userModel.findById(id).exec();
    }

    async getUserByEmail(email:string): Promise<IUser> {        
        return await this.userModel.findOne({ email: email }).exec();
    }   

    

    async getUserByEmailString(email:string): Promise<IUser> {        
        return await this.userModel.findOne({ email: email }).exec();
    }   

    async updateUser(id: string, userInput: UserInput): Promise<IUser> {
        return await this.userModel.findByIdAndUpdate(id, userInput, { new: true });
    }

   
   
}
