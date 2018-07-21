'use strict';

function triangleOfDollars(dollars) {
    for (let i = 1; i <= dollars; i++) {
        let str = "";
        for (let j = 0; j < i; j++) {
            str += '$';
        }

        console.log(str);
    }
}

triangleOfDollars(5);

