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

$(document).ready(function () {

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

function timeTracker() {
    //get current number of hours.
    var currentTime = moment().hour();

    // loop over time blocks
    $(".time-block").each(function () {
        var checkTime = parseInt($(this).attr("id").split("hour")[1]);

        // To check the time and add the classes for background indicators
        if (checkTime < currentTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }
        else if (checkTime === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }       
    })
}


    // saveBtn click listener 
    $(".saveBtn").on("click", function () {
        // Get nearby values of the description in JQuery
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        // Save text in local storage
        localStorage.setItem(time, text);
  $("#hour_9 .description").val(localStorage.getItem("hour_9"));
  $("#hour_10 .description").val(localStorage.getItem("hour_10"));
  $("#hour_11 .description").val(localStorage.getItem("hour_11"));
  $("#hour_12 .description").val(localStorage.getItem("hour_12"));
  $("#hour_1 .description").val(localStorage.getItem("hour_1"));
  $("#hour_2 .description").val(localStorage.getItem("hour_2"));
  $("#hour_3 .description").val(localStorage.getItem("hour_3"));
  $("#hour_4 .description").val(localStorage.getItem("hour_4"));
  $("#hour_5 .description").val(localStorage.getItem("hour_5"));
    })
    checkTime();
    timeTracker();
})