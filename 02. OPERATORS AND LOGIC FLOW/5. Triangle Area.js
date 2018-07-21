'use strict';

function triangleArea(s1, s2, s3) {
    let s = (s1 + s2 + s3) / 2;
    return Math.sqrt(s * (s - s1) * (s - s2) * (s - s3));
}

console.log(triangleArea(2, 3.5, 4));