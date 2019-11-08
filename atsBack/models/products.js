const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Reviews = require('../models/reviews');

const ProductSchema = new Schema({
    productName: {
        type: String,
        trim: true,
    },
    color: {
        type: String,
        trim: true,
    },
    category: {
        type: String,
        trim: true,
    },
    price: {
        type: String,
        trim: true,
    },
    description: {
        type: String,
        trim: true,
    },
    tag: {
        type: String,
        trim: true,
    },
    productMaterial: {
        type: String,
        trim: true,
    },
    imageUrl: {
        type: String,
        trim: true,
    },
    createdAt: {
        type: Date,
    },
    reviews: [Reviews]

});

module.exports = mongoose.model('Product', ProductSchema);
