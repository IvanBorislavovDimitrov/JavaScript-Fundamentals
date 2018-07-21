'use strict';

function wordsUpper(text) {
    let words = text.split(/\W+/);

    let res = '';
    for (const word of words) {
        if (word !== '') {
            res += word.toUpperCase() + ', ';
        }
    }

    res = res.substr(0, res.length - 2);

    return res;
}

console.log(wordsUpper('hello.asd'));


