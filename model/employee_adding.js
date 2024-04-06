const mongoose = require('mongoose')

//create model
const empDetailsSchema = new mongoose.Schema({
    //variables(attributes)
    empID : {
        type : String,   //data type
        required : true   //backend validation (have to put a value)
    },
    name : {
        type : String,
        required : true
    },
    dateOfBirth : {
        type : Date,
        required : true
    },
    address: {
        type : String,   
        required : true   
    },
    contactNumber : {
        type : String,
        required : true
    },
    position : {
        type : String,
        required : true
    },
    department: {
        type : String,   
        required : true  
    },
    joinedDate : {
        type : Date,
        required : true
    }
},{
        timestamps:true,   //time of creation or time of last update
}
);

//module export to functions 
module.exports = mongoose.model('EmpDetails',empDetailsSchema);