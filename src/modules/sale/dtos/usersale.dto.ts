import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserSaleDto {
    @Field()
    user: string;
   
}