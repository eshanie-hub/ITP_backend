const mongoose = require('mongoose');

const inventoryScchema = new mongoose.Schema({
    itemNo: {
        type:String,
        required: true
    },
    itemName: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stockCount: {
        type: Number,
        required: true
    },
    reorderPoint: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Inventory', inventoryScchema);