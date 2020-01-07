
// array of time in the work day
let times = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
let hours = [9, 10, 11, 12, 13, 14, 15, 16, 17];
let todoList = ["", "", "", "", "", "", "", "", ""];
let toDoText;

let m = moment();
let x = m.hour();

// create a row for each time of the day that includes a textarea and a save button
$.each(hours, function(index, time) {
    let timeRow = $('<div class="row time-block">')
    let hour = $('<div class="col-md-1 hour">').text(times[index]);
    timeRow.append(hour);
    toDoText = $('<textarea></textarea>');
    timeRow.append(toDoText);
    toDoText.attr("id", index);
    if(x > hours[index]) {
        toDoText.attr("class", "past col-md-10");
    }
    else if(x == hours[index]) {
        toDoText.attr("class", "present col-md-10");
    }
    else {
        toDoText.attr("class", "future col-md-10");
    }
    //toDoText.val(todoList[index]);
    saveButton = $('<button class="col-md-1 saveBtn">Save</button>');
    saveButton.attr("data-save", index);
    timeRow.append(saveButton);
    $('.container').append(timeRow);
})

$('.saveBtn').on('click', function() {
    let index = $(this).attr("data-save");
    let textIndex = '#' + index;
    todoList[index] = $(textIndex).val();
    localStorage.setItem("todo", todoList);
    console.log(todoList);
})