'use strict';

function jsonTable(jsonArr) {
    let res = '<table>\n';
    for (let studentJson of jsonArr) {
        let student = JSON.parse(studentJson);
        res += '\t<tr>\n';
        for (let studentParam in student) {
            res += `\t\t<td>${student[studentParam]}</td>\n`;
        }
        res += '\t<tr>\n';
    }

    res += '</table>';

    console.log(res);
}

jsonTable([
    '{"name":"Pesho","position":"Promenliva","salary":100000}',
    '{"name":"Teo","position":"Lecturer","salary":1000}',
    '{"name":"Georgi","position":"Lecturer","salary":1000}',
]);