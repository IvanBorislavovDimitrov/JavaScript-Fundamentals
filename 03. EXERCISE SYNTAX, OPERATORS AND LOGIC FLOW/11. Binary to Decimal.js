'use strict';

function binaryToDecimal(numberInBinary) {
    let numberInBinaryStr = numberInBinary.toString();
    let numberInDecimal = 0;
    let pos = 0;
    for (let i = numberInBinaryStr.length - 1; i >= 0; i--) {
        if (numberInBinaryStr[i] === '1') {
            numberInDecimal += 2 ** pos;
        }
        pos++;
    }

    return numberInDecimal;
}

console.log(binaryToDecimal('11110000'));