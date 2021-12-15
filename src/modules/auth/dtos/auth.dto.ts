import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class AuthDto {
    @Field()
    accessToken: string;

    @Field()
    refreshToken: string;

    @Field()
    expiresIn: number;

    @Field()
    tokenType: string;

    @Field()
    scope: string;

    @Field()
    user: string;
    
    }