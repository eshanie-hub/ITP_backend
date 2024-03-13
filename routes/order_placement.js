const express = require('express');
const Order = require('../model/order_placement');

const router = express.Router();

//adding data
router.route("/add").post((req, res) => {
    const customerName = req.body.customerName;
    const distributorName = req.body.distributorName;
    const products = req.body.products;
    const orderNo = req.body.orderNo;
    const orderType = req.body.orderType;
    const amount = req.body.amount;
    const date = req.body.date;
    const orderStatus = req.body.orderStatus;

    const newOrder = new Order({
      customerName,
      distributorName,
      products,
      orderNo,
      orderType,
      amount,
      date,
      orderStatus
    })

    newOrder.save().then(() =>{
        res.json("New order added")
    }).catch((err) => {
        console.log(err);
    })
})


//get data
router.route("/").get((req, res) => {
    Order.find().then((order) => {
        res.json(order)
    }).catch((err) => {
        console.log(err)
    })
})


//updating data
router.route('/update/:id').put(async (req, res) => {
    let id = req.params.id;
    const {
    customerName,
    distributorName,
    products,
    orderNo,
    orderType,
    amount,
    date,
    orderStatus

    } = req.body;

    const updateOrder = {
        customerName,
        distributorName,
        products,
        orderNo,
        orderType,
        amount,
        date,
        orderStatus
    }

    const update = await Order.findByIdAndUpdate(id, updateOrder)
    .then(() => {
        res.status(200).send({status: "Order updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    }) 
})




//delete
router.route("/delete/:id").delete(async (req, res) => {
    let id = req.params.id;

    await Order.findByIdAndDelete(id)
    .then(() =>{
        res.status(200).send({status: "Order item deleted"});
     }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting item", error: err.message});
     })
})


router.route("/get/:id").get((req, res) => {
    let id = req.params.id;

    Order.findById(id).then((order) => {
        res.json(order)
    }).catch((err) => {
        console.log(err)
    })

})

module.exports = router; 