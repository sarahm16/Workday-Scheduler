
// array of time in the work day
let times = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
let hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
let toDoText;
let todoArray = [];
let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// create an empty array to store user input
for(let i=0; i<times.length; i++) {
    todoArray[i] = "";
}

// sets local storage to empty array if it hasn't been set yet
if(localStorage.getItem("todo-list") == undefined) {
    localStorage.setItem("todo-list", JSON.stringify(todoArray));
}

// create a moment object to retrieve current hour and date
let m = moment();
let currentHour = m.hour();
let weekday = m.day();
let month = m.month();

// display current day of the year
$('#currentDay').text(days[weekday-1] + ", " + months[month] + " " + m.date() + ", " + m.year());

// create a row for each time of the work day
$.each(hours, function(index, time) {

    // create new time block
    let timeRow = $('<div class="row time-block">');

    //create and append time to time block
    let hour = $('<div class="col-md-1 hour">').text(times[index]);
    timeRow.append(hour);

    // create and append text area
    toDoText = $('<textarea></textarea>');
    timeRow.append(toDoText);
    toDoText.attr("id", index);

    // change colors of past, present, and future time blocks
    if(currentHour > hours[index]) {
        toDoText.attr("class", "past col-md-10");
    }
    else if(currentHour == hours[index]) {
        toDoText.attr("class", "present col-md-10");
    }
    else {
        toDoText.attr("class", "future col-md-10");
    }

    // retrieve todoList from local storage and set value of text area
    todoArray = JSON.parse(localStorage.getItem("todo-list"));
    toDoText.val(todoArray[index]);

    // create and append save button
    saveButton = $('<button class="col-md-1 saveBtn">Save</button>');
    saveButton.attr("data-save", index);
    timeRow.append(saveButton);
    $('.container').append(timeRow);
})

// add event listener to each save button, store value of text area into local storage
$('.saveBtn').on('click', function() {
    let index = $(this).attr("data-save");
    let textIndex = '#' + index;
    todoArray[index] = $(textIndex).val();
    localStorage.setItem("todo-list", JSON.stringify(todoArray));

})