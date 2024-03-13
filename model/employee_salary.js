const mongoose = require('mongoose');

const salaryScchema = new mongoose.Schema({
    EmpId: {
        type:Number,
        required: true
    },
    EmpName: {
        type: String,
        required: true
    },
    BasicSalary: {
        type: Number,
        required: true
    },
    Bonus: {
        type: Number,
        required: true
    },
    Tax: {
        type: Number,
        required: true
    },
    NetSalary: {
        type: Number,
        required: true
    }
})

module.exports = mongoose.model('Salary', salaryScchema);