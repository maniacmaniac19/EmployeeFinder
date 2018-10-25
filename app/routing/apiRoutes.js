const express = require("express");
const path = require('path');
const router = express.Router();
const employeeList = require('../data/employees')

router.post("/api/employees", function(req, res){
     console.log(req.body);
    employeeList.push(req.body);
    //sorting algorithm
    res.json(employeeList);
    
});

//get function for api/employees
router.get("/api/employees", function(req, res){
    res.json(employeeList);

});

module.exports = router;


    
    
// for(let i = 0; i < employeeList.length; i++){
// 	let scores = employeeList[i].scores
// 	checkScores(scores);
// }

// function checkScores(scoreArray){
//     let sum = '';
// for(let i = 0; i < scoreArray.length; i++){
//     console.log(+scoreArray[i]);
//     sum +=sum + scoreArray[i];
// }
// console.log(sum);
// }