const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new Schema(
    {
        title: {
            type: String,
            trim: true,
            required: true,

        },
        author: {
            type: String,
            trim: true,
            required: true,
        },
        description: {
            type: String,
        },
        publishedYear: {
            type:Number,
        }
    },
    { timestamps: true, versionKey:false }

);

const bookList = mongoose.model('Book', bookSchema);
module.export = bookList ;