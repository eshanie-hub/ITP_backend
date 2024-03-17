const express = require('express');
const Inventory = require('../model/inventory');

const router = express.Router();

//adding data
router.route("/add").post((req, res) => {
    const itemNo = req.body.itemNo;
    const itemName = req.body.itemName;
    const color = req.body.color;
    const size = req.body.size;
    const price = req.body.price;
    const stockCount = req.body.stockCount;
    const reorderPoint = req.body.reorderPoint;

    const newInventory = new Inventory({
        itemNo,
        itemName,
        color,
        size,
        price,
        stockCount,
        reorderPoint
    })

    newInventory.save().then(() =>{
        res.json("New item added")
    }).catch((err) => {
        console.log(err);
    })
})


//get data
router.route("/").get((req, res) => {
    Inventory.find().then((inventory) => {
        res.json(inventory)
    }).catch((err) => {
        console.log(err)
    })
})


//updating data
router.route('/update/:id').put(async (req, res) => {
    let id = req.params.id;
    const {
    itemNo,
    itemName,
    color,
    size,
    price,
    stockCount,
    reorderPoint
    } = req.body;

    const updateInventory = {
        itemNo,
        itemName,
        color,
        size,
        price,
        stockCount,
        reorderPoint
    }

    const update = await Inventory.findByIdAndUpdate(id, updateInventory)
    .then(() => {
        res.status(200).send({status: "Inventory updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    }) 
})


//delete
router.route("/delete/:id").delete(async (req, res) => {
    let id = req.params.id;

    await Inventory.findByIdAndDelete(id)
    .then(() =>{
        res.status(200).send({status: "Inventory item deleted"});
     }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting item", error: err.message});
     })
})


router.route("/get/:id").get((req, res) => {
    let id = req.params.id;

    Inventory.findById(id).then((inventory) => {
        res.json(inventory)
    }).catch((err) => {
        console.log(err)
    })

})

module.exports = router; 