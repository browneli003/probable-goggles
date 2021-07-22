//set moment to a variable
var now = moment();
//create a variable for the current date
var currentDate = now.format("MM DD YYYY");

// Set date 
$("#currentDay").text("Today's Date: " + currentDate);
