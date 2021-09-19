var saveBtn = $(".saveBtn");

var currentDay = moment().format("dddd, MMMM Do YYYY");
$("#current-day").text(currentDay);

//TODO: Function to check time and determine is timeslot is in the past, present, or future
function checkTime(){
    var timeSlot = $(".form-control");
    var currentHour = moment().format("ha");
    var time = $(".time-slot").innerHTML


    if (time === currentHour) {
        timeSlot.addClass("present");
    // } else if () {
    //     timeSlot.addClass("past");
    // } else {
    //     timeSlot.addClass("future");
    }
    
    console.log(time);
}

//TODO: Function to save the event input into timeslot
function handleEventSave(event) {
    event.preventDefault();
    
    var btnClicked = $(event.target);
    var userEvent = $(".form-control");
    
    //the input from the form of which the button was clicked, will be saved to localStorage
    btnClicked.localStorage.setItem("event", userEvent);
}

saveBtn.on("click", handleEventSave);
checkTime();
