const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    pid: {
        type: Number,
        required: true,
        unique: true
    },
    pname: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: false
    }
});

module.exports = mongoose.model("Product", productSchema);