'use strict';

function nextDay(year, month, day) {
    let date = new Date(year, month - 1, day + 1, 0, 0, 0, 0);

    let currentYear = date.getFullYear();
    let currentMonth = date.getMonth() + 1;
    let currentDay = date.getDate();

    let dateString = currentYear + '-' + currentMonth + '-' + currentDay;

    return dateString;
}

console.log(nextDay(2016, 9, 30));


