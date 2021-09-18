var currentDay = moment().format("dddd, MMMM Do YYYY");
$("#current-day").text(currentDay);

function checkTime(){
    var timeOfDay = $(".form-control")
    
    if (moment()) {
        timeOfDay.addClass("present");
    } else if (moment()) {
        timeOfDay.addClass("past");
    } else {
        timeOfDay.addClass("future");
    }
}

checkTime();
