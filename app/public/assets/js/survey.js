// let scoreArray = []

// let scores = function(){
//     console.log("Something's happening here.")
//     // let quest1 = $.('#questionOne' option:selected).value;
//     // console.log(quest1);
// }

// scores();

//drop down selector for each question

//get selected value for each question

//store value to array when clicked on submit

//post route to send data to employees.js

$('#submitSurvey').on('click',function(event){
    console.log('button was clicked.');
    event.preventDefault();
    let scoreArray = [];
    scoreArray.push($("#questionOne").val());
    scoreArray.push($("#questionTwo").val());
    scoreArray.push($("#questionThree").val());
    scoreArray.push($("#questionFour").val());
    console.log(scoreArray);
    let employees = {
        name:$("#name").val(),
        photo:$("#photo").val(),
        scores: scoreArray,
    }
    $.ajax({
        url:window.location.origin + '/data/employees',
        method: "POST",
        data: employees,
    }).then(function(response){
    console.log("promise");
    console.log(response)
    console.log(employees);
    });
});

