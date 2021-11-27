
import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { SaleInput } from './inputs/sale.input';
import { ISale } from './interfaces/sale.interface';
@Injectable()
export class SaleService {
    constructor(@InjectModel('Sale') private readonly saleModel: Model<ISale>) { }

    async createSale(sale: SaleInput): Promise<ISale> {
        const createdSale = new this.saleModel(sale);
        return await createdSale.save();
    }

    async getSales(): Promise<ISale[]> {
        return await this.saleModel.find().exec();
    }

    async findOne(id: string): Promise<any> {
        return await this.saleModel.findById(id).exec();
    }

    async update(id: string, sale: any): Promise<any> {
        return await this.saleModel.findByIdAndUpdate(id, sale, { new: true });
    }

    async delete(id: string): Promise<any> {
        return await this.saleModel.findByIdAndRemove(id);
    }
}
