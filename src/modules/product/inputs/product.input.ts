import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ProductInput {
    @Field()
    productName: string;

    @Field()
    description: string;

    @Field()
    price: number;

    @Field()
    category: string;

    @Field()
    imageUrl: string;

    @Field()
    userId: string;

    @Field()
    stock: number;
}

