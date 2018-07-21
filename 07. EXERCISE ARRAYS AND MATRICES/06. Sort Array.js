function sortArrayByTwoCriteria(words) {
    words.sort(function(w1, w2) {
        let length = w1.length - w2.length;
        if (length === 0) {
            return w1.toLowerCase().localeCompare(w2.toLowerCase());
        }

        return length;
    });

    console.log(words.join('\n'));
}