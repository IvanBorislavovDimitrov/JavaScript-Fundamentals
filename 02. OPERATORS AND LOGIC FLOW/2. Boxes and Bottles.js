'use strict';

function boxesAndBottles(bottles, boxSize) {
    let countOfBoxesNeeded = 0;
    while (bottles > 0) {
        bottles -= boxSize;
        countOfBoxesNeeded++;
    }

    return countOfBoxesNeeded;
}

console.log(boxesAndBottles(15, 7));