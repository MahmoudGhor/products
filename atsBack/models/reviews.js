const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReviewSchema = mongoose.Schema({
    rating: {
        type: Number,
        trim: true,
    },
    content: {
        type: String,
        trim: true,
    }

});

module.exports = ReviewSchema;
