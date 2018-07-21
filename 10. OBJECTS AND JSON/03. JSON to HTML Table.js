<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>FromJSONToHTMLTable</title>
    <style>
        table, th {
            border: groove;
            border-collapse: collapse;
        }

        td {
            border: 1px solid black;
        }

        td, th {
            padding: 5px;
        }
    </style>
</head>
<body>
<div id="wrapper">
</div>
<script>
    function fromJSONToHTMLTable(input) {
        let students = JSON.parse(jsonString);

        let res = '<table>\n';
        res += '  <tr>';
        for (let stInfo in students[0]) {
            res += '<th>' + stInfo + '</th>';
        }
        res += '</tr>\n';
        for (let stRow of students) {
            res += '  <tr>';
            for (let student in stRow) {
                if (!Number.isFinite(stRow[student])) {
                    let text = stRow[student].replace(/&/g, '&amp;')
                        .replace(/</g, '&lt;')
                        .replace(/>/g, '&gt;')
                        .replace(/"/g, '&quot;')
                        .replace(/'/g, '&#39;');

                    res += `<td>${text}</td>`;
                } else {
                    res += `<td>${stRow[student]}</td>`;
                }
            }
            res += '</tr>\n';
        }
        res += '</table>\n';

        return res;
    }

    window.onload = function () {
        let container = document.getElementById('wrapper');
        container.innerHTML = fromJSONToHTMLTable(['[{"Name":"Tomatoes & Chips","Price":2.35},{"Name":"J&B Chocolate","Price":0.96}]']);
    };
</script>
</body>
</html>
