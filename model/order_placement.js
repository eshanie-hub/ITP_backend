const mongoose = require('mongoose');

const orderScchema = new mongoose.Schema({
   customerName: {
        type: String,
        required: true
    },
    distributorName: {
        type: String,
        required: true
    },
    products: {
        type: String,
        required: true
    },
    orderNo: {
        type: Number,
        required: true
    },
    orderType: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: String,
        required: true
    
    },
    orderStatus: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Order', orderScchema);