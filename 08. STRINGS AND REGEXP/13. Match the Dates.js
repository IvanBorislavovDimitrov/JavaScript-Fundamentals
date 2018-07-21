function matchTheDates(texts) {
    let regex = /^\d{1,2}-[A-Z][a-z]{2}-\d{4}$/;
    let dates = [];
    for (let text of texts) {
        let words = text.split(/[ +:'"/.,]/);
        for (let word of words) {
            let match = regex.exec(word);
            if (match !== null) {
                console.log(calculateDate(match[0]));
            }
        }
    }

    function calculateDate(dateStr) {
        let res = dateStr.trim() + ' ';
        let dateStrInfo = dateStr.split('-').map(d => d.trim());
        res += `(Day: ${dateStrInfo[0]}, Month: ${dateStrInfo[1]}, Year: ${dateStrInfo[2]})`;
        return res;
    }
}