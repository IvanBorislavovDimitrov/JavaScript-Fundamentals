'use strict';

function coneCharacteristics(r, h) {
    let volume = Math.PI * Math.pow(r, 2) * h / 3.0;
    let area = Math.PI * r * (r + Math.sqrt(r * r + h * h));

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

coneCharacteristics(3, 5);
