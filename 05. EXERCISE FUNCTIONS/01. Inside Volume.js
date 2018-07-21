'use strict';

function solve(numbers) {

    for (let i = 0; i < numbers.length; i += 3) {
        let x = numbers[i];
        let y = numbers[i + 1];
        let z = numbers[i + 2];

        console.log(inVolume(x, y, z) ? 'inside' : 'outside');
    }

    function inVolume(x, y, z) {
        let x1 = 10;
        let x2 = 50;
        let y1 = 20;
        let y2 = 80;
        let z1 = 15;
        let z2 = 50;

        if (x >= x1 && x <= x2) {
            if (y >= y1 && y <= y2) {
                if (z >= z1 && z <= z2) {
                    return true;
                }
            }
        }

        return false;
    }
}

solve([13.1, 50, 31.5,
    50, 80, 50,
    -5, 18, 43]
);