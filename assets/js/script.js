// Getting the current date using dayjs

var currentDate = dayjs().format('dddd, MMM DD');

// Setting content of currentDay to date

document.getElementById('currentDay').textContent = currentDate;

// Getting current hour 

var currentHour = dayjs().format('H');

// adding classes depending on time 

document.querySelectorAll('.time-block').forEach(function(block) {
    var blockHour = parseInt(block.id);
    var hourElement = block.querySelector('.hour');
    if (blockHour < currentHour) {
        block.classList.remove('present', 'future');
        block.classList.add('past');
    } else if (blockHour == currentHour) {
        block.classList.remove('past', 'future');
        block.classList.add('present');
    } else {
        block.classList.remove('past', 'present');
        block.classList.add('future');
    }
});

// Code for save button

document.querySelectorAll('.saveBtn').forEach(function (button) {
    button.addEventListener('click', function () {
        var timeBlock = button.closest('.time-block');
        var textContent = timeBlock.querySelector('textarea').value;
        var timeBlockId = timeBlock.id;
        localStorage.setItem(timeBlockId, textContent);
    });
});