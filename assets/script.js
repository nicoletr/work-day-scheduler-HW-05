var saveBtn = $(".saveBtn");

//Shows today's day and date at top of page
var currentDay = moment().format("dddd, MMMM Do YYYY");
$("#current-day").text(currentDay);

//TODO: Function to check time and determine is timeslot is in the past, present, or future
function checkTime(){
    //Variables to determine the time, and what hour the time block is showing
    var timeBlock = $(".time-block");
    var currentHour = moment().format("ha");
    var time = $(".hour").text();

        //If the current hour of the day matches the hour of the time block, add .present, to turn background red
        if (currentHour < time) {
            timeBlock.removeClass("future");
            timeBlock.removeClass("present");
            timeBlock.addClass("past");
        } 
        //If the current hour of the day is lower than the hour of the time block, add .past, to turn background grey
        else if (currentHour === time) {
            timeBlock.removeClass("past");
            timeBlock.removeClass("future");
            timeBlock.addClass("present");
        }
        //In case of anything else, add .future, to turn the background green
        else {
            timeBlock.removeClass("present");
            timeBlock.removeClass("past");
            timeBlock.addClass("future");
        } 

    console.log(time);
    console.log(currentHour);
}


//Function to save the user input to localStorage
function handleEventSave(event) {
    //Prevents the default form submission from happening
    event.preventDefault();
    saveBtn = $(event.target);
    
    //Picks up the values of the div so computer knows what to save
    var text = $(saveBtn).siblings(".user-input").val();
    var time = $(saveBtn).parent().attr("id");
    
    //The input from the form will be saved into localStorage, key will be the time, and value the input text
    localStorage.setItem(time, text);
}

//TODO: Function to get saved items from localStorage
function getStoredItems () {
    $("#8am .user-input").val(localStorage.getItem("8am"));
    $("#9am .user-input").val(localStorage.getItem("9am"));
    $("#10am .user-input").val(localStorage.getItem("10am"));
    $("#11am .user-input").val(localStorage.getItem("11am"));
    $("#12pm .user-input").val(localStorage.getItem("12pm"));
    $("#1pm .user-input").val(localStorage.getItem("1pm"));
    $("#2pm .user-input").val(localStorage.getItem("2pm"));
    $("#3pm .user-input").val(localStorage.getItem("3pm"));
    $("#4pm .user-input").val(localStorage.getItem("4pm"));
    $("#5pm .user-input").val(localStorage.getItem("5pm"));

}

getStoredItems();
saveBtn.on("click", handleEventSave);
checkTime();
