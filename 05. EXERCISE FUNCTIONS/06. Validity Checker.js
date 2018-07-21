'use strict';

function validityChecker([x1, y1, x2, y2]) {
    let bol = isDistanceValid(x1, y1);
    let r1 = `{${x1}, ${y1}} to {${0}, ${0}}` + ' is ' + (isDistanceValid(x1, y1) ? 'valid' : 'invalid');
    let r2 = `{${x2}, ${y2}} to {${0}, ${0}}` + ' is ' + (isDistanceValid(x2, y2) ? 'valid' : 'invalid');
    let r3 = `{${x1}, ${y1}} to {${x2}, ${y2}}` + ' is ' + (isDistanceValid(x1, y1, x2, y2) ? 'valid' : 'invalid');
    console.log(r1);
    console.log(r2);
    console.log(r3);

    function isDistanceValid(x1, y1, x2, y2) {
        if (x2 === undefined && y2 === undefined) {
            let dist = getDistance(x1, y1, 0, 0);
            return !dist.toString().includes('.');
        }

        let distance = getDistance(x1, y1, x2, y2);
        return !distance.toString().includes('.');
    }

    function getDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    }
}

validityChecker([3, 0, 0, 4]);