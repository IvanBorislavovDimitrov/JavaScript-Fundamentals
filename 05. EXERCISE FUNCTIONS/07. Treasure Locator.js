'use strict';

function tellWhereTheTreasureIs(coordinates) {
    for (let i = 0; i < coordinates.length; i += 2) {
        const x = coordinates[i];
        const y = coordinates[i + 1];

        if (isInTokelau(x, y)) {
            console.log('Tokelau');
        } else if (isInTuvalu(x, y)) {
            console.log('Tuvalu');
        } else if (isInSamoa(x ,y)) {
            console.log('Samoa');
        } else if (isInTonga(x, y)) {
            console.log('Tonga');
        } else if (isInCook(x, y)) {
            console.log('Cook');
        } else {
            console.log('On the bottom of the ocean');
        }
    }
    
    function isInTokelau(x, y) {
        return x >= 8 && x <= 9 && y >= 0 && y <= 1;
    }

    function isInTuvalu(x, y) {
        return x >= 1 && x <= 3 && y >= 1 && y <= 3;
    }

    function isInSamoa(x, y) {
        return x >= 5 && x <= 7 && y >= 3 && y <= 6;
    }

    function isInTonga(x, y) {
        return x >= 0 && x <= 2 && y >= 6 && y <= 8;
    }

    function isInCook(x, y) {
        return x >= 4 && x <= 9 && y >= 7 && y <= 8;
    }
}

tellWhereTheTreasureIs([6, 4]);