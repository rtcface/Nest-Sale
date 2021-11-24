import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class UserDto {
    @Field(() => ID)
    id: string;

    @Field()
    email: string;

    @Field()
    name: string;

    @Field()
    role: string;

    @Field()
    createdAt: Date;

    @Field()
    status: string;

    @Field()
    avatar: string;

    @Field()
    createByGoogle: boolean;

    @Field()
    createByFacebook: boolean;

    @Field()
    createByEmail: boolean;

    @Field()
    createByTwitter: boolean;
}