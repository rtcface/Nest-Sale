import { Field, InputType,  ID } from '@nestjs/graphql';
import { ProductDto } from '../../product/dtos/product.dto';



@InputType()
export class SaleInput { 
    @Field()
    folio: string;

    


    @Field( () => [ID])
    users: string[];
    
    
    
}


