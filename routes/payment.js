const express = require('express');
const payment = require('../model/payment');

const router = express.Router();

//adding data
router.route("/add").post((req, res) => {
    const OrderNo = req.body.OrderNo;
    const PaymentId = req.body.PaymentId;
    const Date=req.body.Date;
    const CustomerName = req.body.CustomerName;
    const Payment = req.body.Payment;
   const Status=req.body.Status;
    const newPaymentH = new payment({
        OrderNo,
        PaymentId,
        Date,
        CustomerName,
        Payment
        
        
    })

    newPaymentH.save().then(() =>{
        res.json("New payment added")
    }).catch((err) => {
        console.log(err);
    })
})


//get data
router.route("/").get((req, res) => {
    payment.find().then((payment) => {
        res.json(payment)
    }).catch((err) => {
        console.log(err)
    })
})


//updating data
router.route('/update/:id').put(async (req, res) => {
    let id = req.params.id;
    const {
        OrderNo,
        PaymentId,
        Date,
        CustomerName,
        Payment
    } = req.body;

    const updatePaymentH = {
        OrderNo,
        PaymentId,
        Date,
        CustomerName,
        Payment
    }

    const update = await payment.findByIdAndUpdate(id, updatePaymentH)
    .then(() => {
        res.status(200).send({status: "Payment was updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    }) 
})


//delete
router.route("/delete/:id").delete(async (req, res) => {
    let id = req.params.id;

    await payment.findByIdAndDelete(id)
    .then(() =>{
        res.status(200).send({status: "Payment  was deleted"});
     }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting item", error: err.message});
     })
})


router.route("/get/:id").get((req, res) => {
    let id = req.params.id;

    payment.findById(id).then((payment) => {
        res.json(payment)
    }).catch((err) => {
        console.log(err)
    })

})

module.exports = router; 