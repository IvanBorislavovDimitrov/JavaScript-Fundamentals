'use strict';

function decode(input) {
    let startIndex = Number(input[0]);
    let endIndex = Number(input[1]);
    let wordForReplace = input[2];
    let text = input[3];
    let regex = /[A-Z]\w+[A-Z]/g;
    let country = regex.exec(text)[0];
    country = country.substring(0, startIndex) + wordForReplace + country.substring(endIndex + 1);
    country = country.substring(0, 1) + country.substring(1).toLowerCase();
    regex = /\d{3}(\.\d*)?/g;
    let town = '';
    let e;
    while ((e = regex.exec(text)) !== null) {
        let digit = Math.ceil(Number(e[0]));
        town += String.fromCharCode(digit);
    }    
    
    town = town.substring(0, 1).toUpperCase() + town.substr(1);
    console.log(`${country} => ${town}`);
} 

decode(["3", "5", "gar","114 sDfia 1, riDl10 confin$4%#ed117 likewise it humanity aTe114.223432 BultoriA - Varnd railLery101 an unpacked as he"]);