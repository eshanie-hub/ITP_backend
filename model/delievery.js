const mongoose = require('mongoose');

const delieveryScchema = new mongoose.Schema({
   
    SalesExecutiveName: {
        type:String,
        required: true
    },
    OperatorName: {
        type: String,
        required: true
    },
   
    OrderNo: {
        type: Number,
        required: true
    },
    Amount: {
        type: Number,
        required: true
    },

    DeliveryStatus: {
        type: String,
        required: true
    }
    
})

module.exports = mongoose.model('delievery', delieveryScchema);