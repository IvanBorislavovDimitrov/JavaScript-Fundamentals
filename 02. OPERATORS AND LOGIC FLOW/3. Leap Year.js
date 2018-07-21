'use strict';

function isLeap(year) {
    return year % 400 === 0 ? 'yes' : (year % 4 === 0 && year % 100 !== 0) ? "yes" : "no";
}

console.log(isLeap(1900));