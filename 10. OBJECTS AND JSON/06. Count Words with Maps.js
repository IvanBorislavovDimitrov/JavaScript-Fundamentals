function countWordsWithMap(text) {
    let map = new Map();
    let regex = /[A-Za-z0-9_]+/g;
    let word;
    while ((word = regex.exec(text)) !== null) {
        if (map.get(word[0].toLowerCase()) === undefined) {
            map.set(word[0].toLowerCase(), 1);
        } else {
            map.set(word[0].toLowerCase(), map.get(word[0].toLowerCase()) + 1);
        }
    }

    let sortedArr = [...map].sort((x1, x2) => x1[0].localeCompare(x2[0]));

    for (let arr of sortedArr) {
        console.log(`'${arr[0]}' -> ${arr[1]} times`);
    }
}

countWordsWithMap('Far too slow, you\'re far too slow.');