
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { ProductService } from './product.service';
import { ProductDto } from './dtos/product.dto';
import { ProductInput } from './inputs/product.input';


@Resolver()
export class ProductResolver {
    constructor( private productService: ProductService ) {}

    @Query(() => [ ProductDto ])
    async products() {
        return this.productService.getProducts();
    }

    @Query(() => ProductDto)
    async product( @Args('id') id: string ) {
        return this.productService.getProduct( id );
    }

    @Mutation(() => ProductDto)
    async createProduct( @Args('data') data: ProductInput ) {
        return this.productService.createProduct( data );
    }

}
