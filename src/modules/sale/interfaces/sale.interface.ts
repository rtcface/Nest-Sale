import { Document } from "mongoose";

export interface ISale extends Document {
    readonly folio: string;
    readonly products : [{
        readonly product: string;
        readonly quantity: number;  
    }];
    readonly total: number;
    readonly users: [{
        readonly user: string;
        readonly role: string;
    }];
    readonly date: Date;    
}


