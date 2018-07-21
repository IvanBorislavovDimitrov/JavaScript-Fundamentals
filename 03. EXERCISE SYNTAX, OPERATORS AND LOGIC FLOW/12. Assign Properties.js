'use strict';

function assignProperties([p1, a1, p2, a2, p3, a3]) {
    let obj = {};
    obj[p1] = a1;
    obj[p2] = a2;
    obj[p3] = a3;

    return obj;
}

console.log(assignProperties(['ssid', '90127461', 'status', 'admin', 'expires', '600']));