function countWordsInText(text) {
    let regex = /[A-Za-z0-9_]+/g;
    let res;
    let words = {};
    while ((res = regex.exec(text)) !== null) {
        let isWordContained = words[res[0]];
        if (isWordContained === undefined) {
            words[res[0]] = 1;
        } else {
            words[res[0]] += 1;
        }
    }

    return JSON.stringify(words);
}
console.log(countWordsInText('JS devs use Node.js for server-side JS.-- JS for devs'));