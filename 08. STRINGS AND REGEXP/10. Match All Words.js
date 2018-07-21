function matchAllWords(sentence) {
    let regex = /[a-zA-Z_0-9]+/g;
    let match;
    let arr = [];
    while (match = regex.exec(sentence)) {
        arr.push(match[0]);
    }

    console.log(arr.join('|'));
}