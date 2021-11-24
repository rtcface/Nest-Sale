import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserDto } from './dtos/user.dto';
import { UserInput } from './inputs/user.input';

@Resolver()
export class UserResolver {
    constructor( private userService:UserService ) {}

    @Query(() => String)
    async Welcome() {
        return 'Welcome to app sales!';
    }

    @Query(() => [UserDto])
    async getUsers() {
        return this.userService.getUsers();
    }

    @Mutation(() => UserDto)
    async createUser(@Args('userInput') userInput: UserInput) {
        return this.userService.createUser(userInput);
    }

    
}
