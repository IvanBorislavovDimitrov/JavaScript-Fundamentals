'use strict';

function whatIsDrivingDoing(info) {
    let speed = info[0];
    let location = info[1];

    let limitedSpeed = getLimitSpeed();

    let over = speed - limitedSpeed;
    if (over <= 0) {
        return;
    }
    if (over > 0 && over <= 20) {
        console.log('speeding');
    } else if (over <= 40) {
        console.log('excessive speeding');
    } else {
        console.log('reckless driving');
    }

        function getLimitSpeed() {
            switch (location) {
                case 'motorway':
                    return 130;
                case 'interstate':
                    return 90;
                case 'city':
                    return 50;
                case 'residential':
                    return 20;
            }
        }
}

whatIsDrivingDoing([100, 'city']);