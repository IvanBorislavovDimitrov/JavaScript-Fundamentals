function simpleEmailValidation(sentence) {
    return sentence.match(/^[a-zA-Z0-9]+@[a-z]+\.[a-z]+$/g) !== null ? 'Valid' : 'Invalid';
}