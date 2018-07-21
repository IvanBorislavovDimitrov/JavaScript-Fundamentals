'use strict'

function usernames(usernameArr) {
    let usernames = new Set();
    for (let usernameStr of usernameArr) {
        usernames.add(usernameStr);
    }

    [...usernames].sort(sortByNameLengthThenByAlphabetical).forEach(x => console.log(x));


    function sortByNameLengthThenByAlphabetical(u1, u2) {
        if (u1.length === u2.length) {
            return u1.localeCompare(u2);
        }

        return u1.length - u2.length;
    }
}

usernames([
    'Ashton',
    'Ariel',
    'Lilly',
    'Keyden',
    'Aizen',
    'Billy',
    'Braston',
    'Kutcher',
]);