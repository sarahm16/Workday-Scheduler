
// array of time in the work day
let times = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];
let todoList = ["", "", "", "", "", "", "", "", ""];
let toDoText;

// create a row for each time of the day that includes a textarea and a save button
$.each(times, function(index, time) {
    let timeRow = $('<div class="row">')
    let hour = $('<div class="col-md-1 hour">').text(time);
    timeRow.append(hour);
    toDoText = $('<textarea class="col-md-10 past"></textarea>');
    toDoText.attr("id", index);
    //toDoText.val(todoList[index]);
    timeRow.append(toDoText);
    saveButton = $('<button class="col-md-1 saveBtn">Save</button>');
    saveButton.attr("data-save", index);
    timeRow.append(saveButton);
    $('.container').append(timeRow);
})

$('.saveBtn').on('click', function() {
    let index = $(this).attr("data-save");
    let textIndex = '#' + index;
    todoList[index] = $(textIndex).val();

    console.log(todoList);
    //console.log($(this).previousElementSibling);
})