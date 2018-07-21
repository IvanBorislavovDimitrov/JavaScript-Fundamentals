function censorship(sentence, words) {

    for (let word of words) {
        sentence = replaceAll(sentence, word);
    }

    function replaceAll(s, rep) {
        return s.replace(new RegExp(rep, 'g'), '-'.repeat(rep.length));
    }

    console.log(sentence);
}