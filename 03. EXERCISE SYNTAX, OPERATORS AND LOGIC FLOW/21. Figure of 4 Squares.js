'use strict';

function figureOf4Squares(num) {
    if (num == 2) {
        console.log('+++');
        return;
    }
    let total = "";
    let firstLine = '+' + '-'.repeat(num - 2) + '+' + '-'.repeat(num - 2) + '+\n';
    total += firstLine;
    let specialRows = Math.floor((num - 3)  / 2);
    for (let i = 0; i < specialRows; i++) {
        total += '|' + ' '.repeat(num - 2) + '|' + ' '.repeat(num - 2) + '|\n';
    }
    total += firstLine;
    for (let i = 0; i < specialRows; i++) {
        total += '|' + ' '.repeat(num - 2) + '|' + ' '.repeat(num - 2) + '|\n';
    }
    total += firstLine;

    return total;
}

console.log(figureOf4Squares(200));