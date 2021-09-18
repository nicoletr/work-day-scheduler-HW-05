var saveBtn = $(".saveBtn");

var currentDay = moment().format("dddd, MMMM Do YYYY");
$("#current-day").text(currentDay);

//TODO: Function to check time and determine is timeslot is in the past, present, or future
function checkTime(){
    var timeSlot = $(".form-control");
    var currentHour = moment().format("hh");
   // var pastHour =

    if (currentHour) {
        timeSlot.addClass("present");
    } else if (pastHour) {
        timeSlot.addClass("past");
    } else {
        timeSlot.addClass("future");
    }

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
