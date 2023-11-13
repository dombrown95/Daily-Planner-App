// Getting the current date using dayjs

var currentDate = dayjs().format('dddd, MMM DD');

// Setting content of currentDay to date

document.getElementById('currentDay').textContent = currentDate;

// Getting current hour 

var currentHour = dayjs().format('H');

// adding classes depending on time 

document.querySelectorAll('.time-block').forEach(function(block) {
    var blockHour = parseInt(block.id);
    if (blockHour < currentHour) {
        block.classList.remove('present');
        block.classList.remove('future');
        block.classList.add('past');
    } else if (blockHour == currentHour) {
        block.classList.remove('past');
        block.classList.remove('future');
        block.classList.add('present');
    } else {
        block.classList.remove('past');
        block.classList.remove('present');
        block.classList.add('future');
    }
});

// Code to fix error with hour styling

varHourElement = block.querySelector('.hour');
if (hourElement) {
    hourElement.classList.add('hour');
}

// Code for save button