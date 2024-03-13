const express = require('express');
const EmpDetails = require("../model/employee_adding");  //import model

const router = express.Router();

//add empDetails(Create)
router.route('/add').post((req,res) =>{
    
    //properties
     const empID = req.body.empID;  // to model initiate
     const name = req.body.name; 
     const dateOfBirth = req.body.dateOfBirth; 
     const address = req.body.address;
     const contactNumber = req.body.contactNumber; 
     const position = req.body.position; 
     const department = req.body.department;
     const joinedDate = req.body.joinedDate; 
    
     
     const newEmpDetails = new EmpDetails({
         empID,
         name,
         dateOfBirth,
         address,
         contactNumber,
         position,
         department,
         joinedDate
     })
     //send js object to database
     newEmpDetails.save().then(()=>{
          //if success
          res.json("Employee Details Added Successfully");
     }).catch((err)=>{
        console.log(err);//display error
  
     });
  });

  //get posts(Read)
router.route('/').get((req,res) =>{
    EmpDetails.find().then((empDetails)=>{
          res.json(empDetails);  //if successs display all employee details
    }).catch((err) =>{
        console.log(err);
    });
});


//update posts(Update) using id

router.route('/update/:id').put(async (req,res)=>{
    let userId = req.params.id;  //fetch user id
    const {empID,
        name,
        dateOfBirth,
        address,
        contactNumber,
        position,
        department,
        joinedDate} = req.body;  //destructure

    const updateEmpDetails = {
         empID,
         name,
         dateOfBirth,
         address,
         contactNumber,
         position,
         department,
         joinedDate
    }

    //check this id user available or not
    const update = await EmpDetails.findByIdAndUpdate(userId,updateEmpDetails)
    //send response to frontend for updated
    .then(()=>{
      res.status(200).send({status:"Employee Details Updated Successfully!!!"}) //updated success
    }).catch((err) =>{
        console.log(err);
        res.status(500).send({status:"Error with Updating employee details",error:err.message})
    })
  
})

//delete posts(Delete) using id

router.route("/delete/:id").delete(async(req,res) =>{
    let userId = req.params.id;
    
    await EmpDetails.findByIdAndDelete(userId)
    .then(()=>{
      res.status(200).send({status:"Epployee Details Deleted Successfully!!!"}) //delete success
    }).catch((err) =>{
       console.log(err.message);
       res.status(500).send({status:"Error with delete employee details ",error:err.message});
    })
 })
 
 //get data of one user
 router.route("/get/:id").get((req,res)=>{
     let empDetailsId = req.params.id;
     
     EmpDetails.findById(empDetailsId)
     .then((empDetails) => {
        res.json(empDetails)
     }).catch((err)=>{
         console.log(err.message);
     })
 })
 
 //export the module
 module.exports = router;