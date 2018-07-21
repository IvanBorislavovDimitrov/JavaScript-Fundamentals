'use strict';

function oddNumbersOneToN(boundary) {
    for (let i = 1; i <= boundary; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}

oddNumbersOneToN(5);

