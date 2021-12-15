import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserDto } from './dtos/user.dto';
import { UserInput } from './inputs/user.input';
import { UseGuards } from '@nestjs/common';
import { GqlAuthGuard } from '../auth/guards/gql-auth.guard';
import { CurrentUser } from '../auth/decorators/current-user.decorator';

@Resolver()
export class UserResolver {
    constructor( private userService:UserService ) {}

    @Query( () => String)
    async Welcome() {
        return 'Welcome to app sales!';
    }

    @UseGuards(GqlAuthGuard)
    @Query(() => [UserDto])
    async getUsers(@CurrentUser() user: UserInput) {
        console.log(user);
        return this.userService.getUsers();
    }
    @UseGuards(GqlAuthGuard)
    @Mutation(() => UserDto)
    async createUser(@CurrentUser() user: UserInput,  @Args('userInput') userInput: UserInput) {
        console.log(user);
        return this.userService.createUser(userInput);
    }

    
}
