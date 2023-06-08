const mongoose = require('mongoose');
const { Schema } = mongoose;

const productSchema = new Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
        },
        price: {
            type: String,
            trim: true,
            required: true,
        },
        description: {
            type: String,
            trim: true,
            required: true,
        },
        createdAt:{
            type: Date,
            default: Date.now
        }
    }
);

const Product = mongoose.model('Product', productSchema);
module.export = Product;