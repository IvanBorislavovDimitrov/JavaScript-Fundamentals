'use strict';

function format(info) {

    let text = '<?xml version="1.0" encoding="UTF-8"?>\n';
    text += '<quiz>\n';

    for (let i = 0; i < info.length; i += 2) {
        text += '  <question>\n';
        text += info[i] + '\n';
        text += '  </question>\n';

        text += '  <answer>\n';
        text += info[i + 1] + '\n';
        text += '  </answer>\n';
    }

    text += '</quiz>';

    return text;
}

console.log(format(["Dry ice is a frozen form of which gas?",
    "Carbon Dioxide",
    "What is the brightest star in the night sky?",
    "Sirius"]
));