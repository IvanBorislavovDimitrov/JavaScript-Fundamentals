function escape(htmls) {
    let res = '<ul>\n';
    for (let html of htmls) {
        html = html.replace(new RegExp('&', 'g'), '&amp;');
        html = html.replace(new RegExp('<', 'g'), '&lt;');
        html = html.replace(new RegExp('>', 'g'), '&gt;');
        html = html.replace(new RegExp('"', 'g'), '&quot;');
        res += '  <li>' + html + '</li>\n';
    }

    res += '</ul>\n';

    console.log(res);
}