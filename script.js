
// an array of time in the work day
let times = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
let todoList = [];
//let toDoTextArea;

// create a row for each time of the day that includes a textarea and a save button
$.each(times, function(index, time) {
    let timeRow = $('<div class="row">')
    let hour = $('<div class="col-md-1 hour">').text(time);
    hour.attr("data-time", time);
    timeRow.append(hour);
    toDoTextArea = $('<textarea class="col-md-10 past"></textarea>');
    //toDoTextArea.attr("data-todo", index);
    timeRow.append(toDoTextArea);

    saveButton = $('<button class="col-md-1 saveBtn index">Save</button>');
    saveButton.attr("data-todo", index);
    //console.log(saveButton.attr("data-todo"));
    timeRow.append(saveButton);
    $('.container').append(timeRow);
})

$('.saveBtn').on('click', function() {
    let index = $(this).attr("data-todo");
    console.log(index);
})