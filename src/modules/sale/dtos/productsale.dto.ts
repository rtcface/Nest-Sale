import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class ProductSaleDto {
    @Field()
    product: string;

    @Field( () => Int )
    quantity: number;
    
}