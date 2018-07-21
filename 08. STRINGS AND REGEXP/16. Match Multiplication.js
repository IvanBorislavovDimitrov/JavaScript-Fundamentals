function matchMultiplication(text) {
    function replaceWithMultiplication(match, p1, p2, p3) {
        return Number(p1) * Number(p3);
    }

    let regex = /(-?\d+\.?\d*)(\s*\*\s*)(-?\d+\.?\d*)/g;
    text = text.replace(regex, replaceWithMultiplication);

    console.log(text);
}
