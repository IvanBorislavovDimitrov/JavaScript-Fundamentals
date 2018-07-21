'use strict';

function colorfulNumbers(count) {
    let res = "";
    res += '<ul>\n';
    for (let i = 1; i <= count; i++) {
        if (i % 2 === 0) {
            res += `<li><span style=\'color:blue\'>` + i + `</span></li>\n`;
        } else {
            res += `<li><span style=\'color:green\'>\` + i + \`</span></li>\n`;
        }
    }
    res += '</ul>';

    return res;
}

