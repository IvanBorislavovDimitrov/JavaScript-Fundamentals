'use strict';

function quadraticEquation(a, b, c) {
    let dis = b * b - 4 * a * c;

    if (dis < 0) {
        console.log('No');
        return;
    }

    if (dis === 0) {
        let x1 = (-b + Math.sqrt(dis)) / 2 / a;
        console.log(x1);
        return;
    }

    let x1 = (-b + Math.sqrt(dis)) / 2 / a;
    let x2 = (-b - Math.sqrt(dis)) / 2 / a;

    if (x1 < x2) {
        console.log(x1);
        console.log(x2);
    } else {
        console.log(x2);
        console.log(x1);
    }

}

quadraticEquation(1, -12, 36);