'use strict';

function dayOfWeek(str) {

    let a =  function (day) {
        switch (day) {
            case 'Monday':
                return 1;
            case 'Tuesday':
                return 2;
            case 'Wednesday':
                return 3;
            case 'Thursday':
                return 4;
            case 'Friday':
                return 5;
            case 'Saturday':
                return 6;
            case 'Sunday':
                return 7;
            default:
                return'error';
        }
    };

    return a(str);
}


console.log(dayOfWeek('Monday'));