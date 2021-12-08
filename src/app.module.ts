import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { UserModule } from './modules/user/user.module';
import { SaleModule } from './modules/sale/sale.module';
import { ProductModule } from './modules/product/product.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AuthModule } from './modules/auth/auth.module';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb://root:123456@localhost:27017'),
    GraphQLModule.forRoot({ autoSchemaFile: 'schema.gql' }),
    UserModule,
    SaleModule,
    ProductModule,
    AuthModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
