'use strict';

function triangleOfStars(n) {
    createTriangle(n, 1);

    function createTriangle(n, start) {
        if (start === n + 1) {
            return;
        }
        console.log('*'.repeat(start));

        createTriangle(n, start + 1);

        console.log('*'.repeat(start - 1));
    }
}



triangleOfStars(5);