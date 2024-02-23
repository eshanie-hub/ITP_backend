const express = require('express');
const Salary = require('../model/employee_salary');

const router = express.Router();

//adding data
router.route("/add").post((req, res) => {
    const EmpId = req.body.EmpId;
    const EmpName = req.body.EmpName;
    const BasicSalary = req.body.BasicSalary;
    const Bonus = req.body.Bonus;
    const Tax = req.body.Tax;
    const NetSalary = req.body.NetSalary;

    const newSalary = new Salary({
        EmpId,
        EmpName,
        BasicSalary,
        Bonus,
        Tax,
        NetSalary
    })

    newSalary.save().then(() =>{
        res.json("New employee salary added")
    }).catch((err) => {
        console.log(err);
    })
})

//get data
router.route("/").get((req, res) => {
    Salary.find().then((salary) => {
        res.json(salary)
    }).catch((err) => {
        console.log(err)
    })
})

//updating data
router.route('/update/:id').put(async (req, res) => {
    let id = req.params.id;
    const {
        EmpId,
        EmpName,
        BasicSalary,
        Bonus,
        Tax,
        NetSalary
    } = req.body;

    const updateSalary = {
        EmpId,
        EmpName,
        BasicSalary,
        Bonus,
        Tax,
        NetSalary
    }

    const update = await Salary.findByIdAndUpdate(id, updateSalary)
    .then(() => {
        res.status(200).send({status: "Salary updated"})
    }).catch((err) => {
        console.log(err);
        res.status(500).send({status: "Error with updating data", error: err.message});
    }) 
})

//delete
router.route("/delete/:id").delete(async (req, res) => {
    let id = req.params.id;

    await Salary.findByIdAndDelete(id)
    .then(() =>{
        res.status(200).send({status: "Employee salary deleted"});
     }).catch((err) => {
        console.log(err.message);
        res.status(500).send({status: "Error with deleting salary", error: err.message});
     })
})


router.route("/get/:id").get((req, res) => {
    let id = req.params.id;

    Salary.findById(id).then((salary) => {
        res.json(salary)
    }).catch((err) => {
        console.log(err)
    })

})

module.exports = router; 