'use strict';

function pointInRect(input) {
    let [x, y, xMin, xMax, yMin, yMax] = input;

    if (x >= xMin && x <= xMax && y >= yMin && y <= yMax) {
        console.log('inside');
        return;
    }

    console.log('outside');
}
