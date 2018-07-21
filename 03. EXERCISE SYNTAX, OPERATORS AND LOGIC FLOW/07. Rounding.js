'use strict';
function round(info) {
    let number = info[0];
    let precision = info[1];

    if (precision > 15) {
        precision = 15;
    }

    let noZeros = parseFloat(number.toFixed(precision));

    console.log(noZeros);
}

round([3.1, 2]);