'use strict';

function oddEven(number) {
    if (number.toString().includes('.')) {
        console.log('invalid');
    } else if (number % 2 === 0) {
        console.log('even');
    } else {
        console.log('odd');
    }
}

oddEven(3.1);
