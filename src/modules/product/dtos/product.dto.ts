import { Field, ID, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class ProductDto {
    @Field(() => ID)
    id: string;
    
    @Field()
    productName: string;
    
    @Field()
    description: string;
    
    @Field()
    price: number;
    
    @Field()
    createdAt: Date;

    @Field()
    stock: number;
    
    
    }