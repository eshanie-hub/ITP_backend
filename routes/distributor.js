const express=require("express");

let distributor=require("../model/distributor");

const router = express.Router();

//adding data
router.route("/add").post((req,res)=>{
    const distributorId=req.body.distributorId;
    const distributorName=req.body.distributorName;
    const phoneNo=Number(req.body.phoneNo);
    const creditLimit=Number(req.body.creditLimit);
    const  agreementStatus=req.body.agreementStatus;
    const  date=Date(req.body.date);

    const newdistributor=new distributor({
        distributorId,
        distributorName,
        phoneNo,
        creditLimit,
        agreementStatus,
        date



    })

    newdistributor.save().then(()=>{
        res.json("distributor added")
    }).catch((err)=>{
        console.log(err);
    })
})

router.route("/").get((req,res)=>{
    distributor.find().then((distributors)=>{
        res.json(distributors)
    }).catch((err)=>{
        console.log(err)
    })
})

router.route("/update/:id").put(async(req,res)=>{
    let userId=req.params.id;
    const {distributorId,distributorName,phoneNo,creditLimit,agreementStatus,date}=req.body;

    const updatedistributor = {
        distributorId,
        distributorName,
        phoneNo,
        creditLimit,
        agreementStatus,
        date

    }

    const update= await distributor.findByIdAndUpdate(userId,updatedistributor)
    .then(()=>{
        res.status(200).send({status:"user updated"})
    }).catch((err)=>{
        console.log(err);
        res.status(500).send({status:"error with updating data",error:err.message});
    })
   
})

router.route("/delete/:id").delete(async(req,res)=>{
    let userId=req.params.id;

    await distributor.findByIdAndDelete(userId)
    .then(()=>{
        res.status(200).send({status:"user deleteed"});
    }).catch((err)=>{
        console.log(err.message);
        res.status(500).send({status :"Errors with delete users",error:err.message});
    })
})

router.route("/get/:id").get((req, res) => {
    let id = req.params.id;

    distributor.findById(id).then((distributor) => {
        res.json(distributor)
    }).catch((err) => {
        console.log(err)
    })

})

module.exports=router;