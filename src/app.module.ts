import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './modules/user/user.module';
import { SaleModule } from './modules/sale/sale.module';
import { ProductModule } from './modules/product/product.module';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:123456@localhost:27017'),
    GraphQLModule.forRoot({ autoSchemaFile: 'schema.gql' }),
    UserModule,
    SaleModule,
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
