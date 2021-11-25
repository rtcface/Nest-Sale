import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { SaleDto } from './dtos/sale.dto';
import { SaleService } from './sale.service';
import { SaleInput } from './inputs/sale.input';

@Resolver()
export class SaleResolver {
    constructor(
        private saleService: SaleService
    ) {}

    @Query( () => [ SaleDto ] )
    async sales() {
        return this.saleService.getSales();
    }

    @Mutation( () => SaleDto )
    async createSale( @Args( 'sale' ) sale: SaleInput ) {
        return this.saleService.createSale( sale );
    }
}
