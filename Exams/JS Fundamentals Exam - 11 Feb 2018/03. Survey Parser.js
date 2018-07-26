function surveyParser(text) {

    let svgRegex = /<svg>.*?<\/svg>/g;
    let svgText = svgRegex.exec(text);
    if (svgText === null) {
        console.log('No survey found');
        return;
    }
    let catLabelRegex = /<cat><text>.*?(\[.*?\])<\/text><\/cat>/g;
    let catLabelMatch = catLabelRegex.exec(svgText[0].trim());
    if (catLabelMatch === null) {
        console.log('Invalid format');
        return;
    }
    let catLabel = catLabelMatch[1].trim().substring(1, catLabelMatch[1].length - 1);
    let catAndValuesRegex = /<cat><text>.*?(\[.*?\])<\/text><\/cat>\s*(<cat>.*?<\/cat>)/g;
    let catAndValuesMatch = catAndValuesRegex.exec(svgText[0].trim());
    let catAndValuesText = catAndValuesMatch[2].trim();
    let valRegex = /<val>\d+<\/val>\d+/g;
    let match;
    let people = 0;
    let totalVotes = 0;
    if (catLabelMatch === null) {
        console.log('Invalid format');
        return;
    }
    while ((match = valRegex.exec(catAndValuesText))) {

        let tokens = match[0].split(/<val>|<\/val>/);
        let votes = Number(tokens[2]);
        let power = Number(tokens[1]);

        people += votes * power;
        totalVotes += votes;
    }

    console.log(`${catLabel}: ${Number((people / totalVotes).toFixed(2))}`)
}

surveyParser('<p>Some random text</p><svg><cat><text>How do you rate our food? [Food - General]</text></cat><cat><g><val>1</val>0</g><g><val>2</val>1</g><g><val>3</val>3</g><g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>Some more random text</p>')