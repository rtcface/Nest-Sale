// schema for sale
import * as mongoose from 'mongoose';

export const SaleSchema = new mongoose.Schema({
    folio: {
        type: String,
        required: true,
        unique: true
    },    
    products: {
        type: [{
            product: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            }
        }],
        required: true
    },
    users: {
        type: [{
            user: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true
            }
        }],
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    total: {
        type: Number,
    },
});

