const mongoose=require('mongoose');

const Schema= mongoose.Schema;

const distributorSchema=new Schema({
    distributorId:{
        type:String,
        required:true
    },
    distributorName:{
        type:String,
        required:true
    },
    phoneNo:{
        type:Number,
        required:true
    },
    creditLimit:{
        type:Number,
        required:true
    },
    agreementStatus:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    }
});
module.exports =mongoose.model('Distributor',distributorSchema);