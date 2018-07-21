'use strict';


function countWords(text) {
    let words = new Set();
    let regex = /[A-Za-z0-9_]+/g;
    let line;
    while ((line = regex.exec(text)) !== null) {
        words.add(line[0].toLowerCase());
    }

    console.log([...words].join(', '));
}

countWords('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque quis hendrerit dui. \n' +
    'Quisque fringilla est urna, vitae efficitur urna vestibulum fringilla. \n' +
    'Vestibulum dolor diam, dignissim quis varius non, fermentum non felis. \n' +
    'Vestibulum ultrices ex massa, sit amet faucibus nunc aliquam ut. \n' +
    'Morbi in ipsum varius, pharetra diam vel, mattis arcu. \n' +
    'Integer ac turpis commodo, varius nulla sed, elementum lectus. \n' +
    'Vivamus turpis dui, malesuada ac turpis dapibus, congue egestas metus.\n');