var saveBtn = $(".saveBtn");

//Shows today's day and date at top of page
var currentDay = moment().format("dddd, MMMM Do YYYY");
$("#current-day").text(currentDay);

//Shows current time of day
let currentTime = function() {
    $("#current-time").text(moment().format("h:mm:ssa"));
}

//TODO: Function to check time and determine is timeslot is in the past, present, or future
function checkTime(){
    //Variables to determine the time, and what hour the time block is showing
    var timeBlock = $(".time-block");
    var currentHour = moment().hour();

    timeBlock.each(
        function() {
            var time = parseInt($(this).attr("id"));
            //If the current hour of the day matches the hour of the time block, add .past, to turn background grey
            if (time < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            } 
            //If the current hour of the day is lower than the hour of the time block, add .present, to turn background red
            else if (currentHour === time) {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
            }
            //In case of anything else, add .future, to turn the background green
            else {
                $(this).addClass("future");
                $(this).removeClass("present");
                $(this).removeClass("past");
            } 
    });
}


//Function to save the user input to localStorage
function handleEventSave() {
    //Directs event to the specific button clicked
    saveBtn = $(this);
    //Picks up the values of the div so computer knows what to save
    var text = saveBtn.siblings(".user-input").val();
    var time = saveBtn.parent().attr("id");
    //The input from the form will be saved into localStorage, key will be the time, and value the input text
    localStorage.setItem(time, text);
}

//Function to get saved items from localStorage
function getStoredItems () {
    $("#8 .user-input").val(localStorage.getItem("8"));
    $("#9 .user-input").val(localStorage.getItem("9"));
    $("#10 .user-input").val(localStorage.getItem("10"));
    $("#11 .user-input").val(localStorage.getItem("11"));
    $("#12 .user-input").val(localStorage.getItem("12"));
    $("#13 .user-input").val(localStorage.getItem("13"));
    $("#14 .user-input").val(localStorage.getItem("14"));
    $("#15 .user-input").val(localStorage.getItem("15"));
    $("#16 .user-input").val(localStorage.getItem("16"));
    $("#17 .user-input").val(localStorage.getItem("17"));
}


//TODO: Fix up display for smaller screens

currentTime();
setInterval(currentTime, 1000);

checkTime();

getStoredItems();

saveBtn.on("click", handleEventSave);
