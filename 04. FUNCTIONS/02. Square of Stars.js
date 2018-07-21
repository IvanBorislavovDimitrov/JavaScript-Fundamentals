'use strict';

function square(n = 5) {
    createTriangle(n, 1);

    function createTriangle(n, start) {
        if (start === n + 1) {
            return;
        }
        console.log('* '.repeat(n));
        createTriangle(n, start + 1);
    }
}



square( );