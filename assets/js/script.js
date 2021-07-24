//set moment to a variable
var now = moment();
//create a variable for the current date
var currentDate = now.format("MM DD YYYY");

// Set date 
$("#currentDay").text("Today's Date: " + currentDate);

var tasks = {};

var saveBtn = $("#save");


var text = $("#textarea")
.text()
.trim()


//function to check the time of the event and compare to current time
function checkTime(time, Id) { 
    if (currentDate > time) { 
        $(Id).addClass("past"); 
    }
    if (currentDate < time) { 
        $(Id).addClass("future"); 
    }
    if (currentDate == time) { 
        $(Id).addClass("present");
    }

}

$(document).ready(function () {
    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
    })
})