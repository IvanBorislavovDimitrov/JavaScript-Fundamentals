function scoreToHtml(json) {
    let objArr = JSON.parse(json);
    let html = '<table>\n';
    html += '  <tr><th>name</th><th>score</th></tr>\n';

    for (let obj of objArr) {
        let name = obj['name'].replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
        html += `  <tr><td>${name}</td><td>${obj['score']}</td></tr>\n`;
    }
    html += '</table>\n';

    return html;
}