function extractText(word) {
    let regex = /\((.*?)\)/g;

    let words = [];
    let match;
    while (match = regex.exec(word)) {
        words.push(match[1]);
    }

    console.log(words.join(', '));
}