const express = require("express");
const path = require('path');
const router = express.Router();
const employeeList = require('../data/employees')


//should be in html route
router.get('/survey', function(req, res){
    console.log(__dirname)
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
});

router.get('/data/employees', function(req,res){
    res.sendFile(path.join(__dirname, "/../data/employees.js"));
})

router.get('/', function(req, res){
    console.log(__dirname)
    res.sendFile(path.join(__dirname, "/../public/home.html"));
});

router.post("/data/employees", function(req, res){
    console.log(req.body);
    res.json(req.body);
    res.send(req.body);
});

//push data to 

module.exports = router;