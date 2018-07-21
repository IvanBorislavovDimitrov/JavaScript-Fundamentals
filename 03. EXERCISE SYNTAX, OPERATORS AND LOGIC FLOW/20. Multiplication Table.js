'use strict';

function multiplicationTable(num) {
    let res = '<table border="1">\n';
    res += '  <tr><th>x</th>';
    for (let i = 1; i <= num ; i++) {
        res += `<th>${i}</th>`;
    }
    res += '</tr>\n';


    for (let i = 1; i <= num; i++) {
        let start = i;
        res += `  <tr><th>${start}</th>`;
        for (let j = 0; j < num; j++) {
            res += `<td>${start}</td>`;
            start += i;
        }
        res += '</tr>\n';
    }

    res += '</table>';

    return res;
}

console.log(multiplicationTable(6));