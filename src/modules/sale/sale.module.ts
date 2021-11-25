import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SaleResolver } from './sale.resolver';
import { SaleService } from './sale.service';
import { SaleSchema } from './schemas/sale.schema';


@Module({
  imports: [ MongooseModule.forFeature([ { name:'Sale',schema:SaleSchema } ]) ],
  providers: [SaleResolver, SaleService]
})
export class SaleModule {}
