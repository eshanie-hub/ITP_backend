const mongoose = require('mongoose');

const customerCareSchema = new mongoose.Schema({
    name: {
        type:String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    mail: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('CustomerCare', customerCareSchema);