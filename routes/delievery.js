const express = require('express');
const delievery = require('../model/delievery');

const router = express.Router();

//adding data
router.route("/add").post((req, res) => {
    const SalesExecutiveName = req.body.SalesExecutiveName;
    const OperatorName = req.body.OperatorName;
    const OrderNo = req.body.OrderNo;
    const Amount = req.body.Amount;
    const DeliveryStatus = req.body.DeliveryStatus;

    const newdelievery = new delievery({
        SalesExecutiveName,
        OperatorName,
        OrderNo,
        Amount,
        DeliveryStatus
    })

    newdelievery.save().then(() =>{
        res.json("New record added")
    }).catch((err) => {
        console.log(err);
    })
})


//get data
router.route("/").get((req, res) => {
    delievery.find().then((delievery) => {
        res.json(delievery)
    }).catch((err) => {
        console.log(err)
    })
})


//updating data
router.route('/update/:id').put(async (req, res) => {
    let id = req.params.id;
    const {
        SalesExecutiveName,
        OperatorName,
        OrderNo,
        Amount,
        DeliveryStatus
    } = req.body;

    const updatedelievery = {
        SalesExecutiveName,
        OperatorName,
        OrderNo,
        Amount,
        DeliveryStatus
    }

    const update = await delievery.findByIdAndUpdate(id, updatedelievery)
    .then(() => {
        res.status(200).send({status: "Delivery updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    }) 
})


//delete
router.route("/delete/:id").delete(async (req, res) => {
    let id = req.params.id;

    await delievery.findByIdAndDelete(id)
    .then(() =>{
        res.status(200).send({status: "Delivery item deleted"});
     }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting item", error: err.message});
     })
})


router.route("/get/:id").get((req, res) => {
    let id = req.params._id;

    delievery.findById(id).then((delievery) => {
        res.json(delievery)
    }).catch((err) => {
        console.log(err)
    })

})

module.exports = router; 