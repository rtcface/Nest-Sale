import { Module } from '@nestjs/common';
import { SaleResolver } from './sale.resolver';
import { SaleService } from './sale.service';


@Module({
  imports: [],
  providers: [SaleResolver, SaleService]
})
export class SaleModule {}
