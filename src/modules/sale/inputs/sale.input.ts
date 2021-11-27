import { Field, InputType } from '@nestjs/graphql';
import { ProductSaleDto } from '../dtos/productsale.dto';
import { UserSaleDto } from '../dtos/usersale.dto';




@InputType()
export class SaleInput { 
    @Field()
    folio: string;

    @Field( () => [ProductSaleDto])
    products:[ProductSaleDto]

    @Field( () => [UserSaleDto])
    users: [UserSaleDto];

    @Field()
    total: number;
    
    
    
}


