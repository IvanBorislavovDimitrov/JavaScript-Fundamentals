'use strict';
function imperialUnits(inches) {
    let feet = Math.floor(inches / 12);
    let inchesLeft = inches % 12;

    console.log(`${feet}'-${inchesLeft}"`);
}

imperialUnits(11);