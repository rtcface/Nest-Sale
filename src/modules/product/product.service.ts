
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { IProduct } from './interfaces/product.interface';
import { ProductInput } from './inputs/product.input';


@Injectable()
export class ProductService {
    constructor(@InjectModel('Product') private readonly productModel: Model<IProduct>) {}

    async createProduct(createProductDto: ProductInput): Promise<IProduct> {
        const createdProduct = new this.productModel(createProductDto);
        return await createdProduct.save();
    }

    async getProducts(): Promise<IProduct[]> {
        return await this.productModel.find().exec();
    }

    async getProduct(productId: string): Promise<IProduct> {
        return await this.productModel.findById(productId).exec();
    }

}
