import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductResolver } from './product.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './schemas/product.schema';

@Module({
  imports: [ MongooseModule.forFeature([ { name:'Product',schema:ProductSchema } ]) ],
  providers: [ProductService, ProductResolver]
})
export class ProductModule {}
