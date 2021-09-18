var currentDay = moment().format("dddd, MMMM Do YYYY");
$("#current-day").text(currentDay);

//TODO: Finish function
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


checkTime();
