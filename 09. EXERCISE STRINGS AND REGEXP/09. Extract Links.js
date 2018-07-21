function extractTheLinks(texts) {
    let regex = /www\.[a-zA-Z0-9\-]+(\.[a-z]+)+/g;
    for (let text of texts) {
        let match;
        while (match = regex.exec(text)) {
            console.log(match[0]);
        }
    }
}
