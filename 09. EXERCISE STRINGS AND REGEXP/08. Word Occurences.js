function countOccurrences(text, searchedWord) {
    let words = text.split(/\W+/g).map(w => w.toLowerCase());
    let count = 0;
    searchedWord = searchedWord.replace(/\W+/, '').toLowerCase();
    for (let word of words) {
        if (word === searchedWord) {
            count++;
        }
    }

    console.log(count);
}