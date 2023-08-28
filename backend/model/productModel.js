const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    productName: {
        type: String,
        required: [true, "product name is required"]
    },
    price: {
        type: Number,
        required: [true, "product price is required"]
    },
    category: {
        type: String,
        default: "general"
    },
    image: {
        type:String
    }
})

const productModel = mongoose.model('products', productSchema)

module.exports = productModel;