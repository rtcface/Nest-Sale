import { Document } from "mongoose";

export interface Sale extends Document {
    readonly folio: string;
    readonly products : [{
        readonly product: string;
        readonly quantity: number;  
    }];
    readonly total: number;
    readonly users: [{
        readonly user: string;
        readonly quantity: number;
    }];
    readonly date: Date;    
}


