// Getting the current date using dayjs

var currentDate = dayjs().format('dddd, MMM DD');

// Setting content of currentDay to date

document.getElementById('currentDay').textContent = currentDate;