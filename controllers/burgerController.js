//Dependencies
let express = require("express");
let router= express.Router();

//Imports the model (burger.js) to use its database functionality
let burger = require("../models/burger.js");

//handles Get method and runs the selectAll function 
router.get('/api/burgers',(req, res)=>{
    burger.selectAll((data)=>{
        res.json(data);
    });
});

//handles POST method and runs insertOne function
router.post('/api/burgers',(req,res)=>{
    let burger_name = req.body.name;
    let devoured = req.body.devoured;

    burger.insertOne(burger_name, devoured, (result)=>{
        res.json({id:result.insertId});
    });
});

//handles PUT method and runs updateOne function
router.put('/api/burgers/:id',(req,res)=>{
    let burgerId = req.params.id;
    let devoured = req.body.devoured;

    burger.updateOne(burgerId, devoured, (result)=>{
        if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});
module.exports = router;

