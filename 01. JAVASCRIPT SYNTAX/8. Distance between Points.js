'use strict';

function distanceBetweenTwoPoints(x1, y1, x2, y2) {
    let x = Math.abs(x1 - x2);
    let y = Math.abs(y1 - y2);

    return Math.sqrt((x * x) + (y * y));
}

console.log(distanceBetweenTwoPoints(2, 4, 5, 0));



