import { Document } from "mongoose";
export interface IProduct extends Document {
    readonly productName: string;
    readonly description: string;
    readonly price: number;
    readonly image: string;
    readonly createdAt: Date;
    readonly category: string;
    readonly userId: string;    
}
