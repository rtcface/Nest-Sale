import { Field, ID, ObjectType } from "@nestjs/graphql";
import { GraphQLList } from "graphql";
import { ProductDto } from '../../product/dtos/product.dto';
import { UserDto } from '../../user/dtos/user.dto';

@ObjectType()
export class SaleDto {

    @Field(() => ID)
    id: string;

    @Field()
    folio: string;

    @Field(() => [ProductDto])
    products: ProductDto[];
   
    @Field()
    total: number;

    @Field()
    createdAt: Date;

    @Field( () => [UserDto] )
    users: UserDto[];

}