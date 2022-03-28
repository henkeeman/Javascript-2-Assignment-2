const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    imageurl: {
        type: String,
        required: true
    }
},{timestamps: true})


module.exports = mongoose.model('products', postSchema);