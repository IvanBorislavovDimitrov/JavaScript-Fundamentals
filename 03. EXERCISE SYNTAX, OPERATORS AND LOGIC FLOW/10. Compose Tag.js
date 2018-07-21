'use strict';

function composeTag([src, alt]) {
    return `<img src="${src}" alt="${alt}">`
}

console.log(composeTag(['smiley.gif', 'Smiley Face']));