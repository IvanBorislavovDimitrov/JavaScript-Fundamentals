'use strict';

function modifyAverage(number) {
    let modifyingNumber = number;

    let avr = getAverage(modifyingNumber);
    while (avr <= 5) {
        modifyingNumber = modifyingNumber.toString() + '9';
        modifyingNumber = Number(modifyingNumber);
        avr = getAverage(modifyingNumber);
    }

    function getAverage(num) {
        let sum = 0;
        let count = 0;
        while (num > 0) {
            sum += num % 10;
            count++;
            num /= 10;
            num = parseInt(num.toString());
        }

        return sum / count;
    }

    return modifyingNumber;
}

console.log(modifyAverage(5835));