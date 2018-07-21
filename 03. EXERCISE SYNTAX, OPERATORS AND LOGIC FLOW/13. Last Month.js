'use strict';

function lastMonth([day, month, year]) {
    month--;
    if (month === -1) {
        month = 11;
    }
    let date = new Date(year, month, 0);

    return date.getDate();
}

console.log(lastMonth([17, 3, 2002]));