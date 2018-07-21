'use strict';

function cookingNumbers(info) {
    let number = info[0];
    for (let i = 1; i < info.length; i++) {
        let command = info[i];
        switch (command) {
            case 'chop':
                number /= 2;
                break;
            case 'dice':
                number = Math.sqrt(number);
                break;
            case 'spice':
                number++;
                break;
            case 'bake':
                number *= 3;
                break;
            case 'fillet':
                number -= number * 20 / 100;
                break;
        }
        console.log(number);
    }
}

cookingNumbers([32, 'chop', 'chop', 'chop', 'chop', 'chop']);