function secretData(texts) {
    let nameRegex = /(\*[A-Z][a-zA-Z]*)(\s|$)/g;
    let phoneRegex = /(\+[0-9-]{10})(\s|$)/g;
    let idRegex = /(![0-9A-Za-z]+)(\s|$)/g;
    let secretBaseRegex = /(_[0-9A-Za-z]+)(\s|$)/g;

    let res = '';
    for (let text of texts) {
        text = text.replace(nameRegex, replaceFunc);
        text = text.replace(phoneRegex, replaceFunc);
        text = text.replace(idRegex, replaceFunc);
        text = text.replace(secretBaseRegex, replaceFunc);
        res += text + '\n';
    }

    console.log(res);

    function replaceFunc(match, p1) {
        return '|'.repeat(p1.length) + ' ';
    }
}