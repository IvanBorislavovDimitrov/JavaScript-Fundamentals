'use strict';

function travelInvestigation(arr) {
    let companiesStr = arr[0].toLowerCase();
    let delimiter = arr[1].toLowerCase();
    let sentences = arr.slice(2).map(s => s.toLowerCase());
    let companies = companiesStr.split(delimiter).map(x => x.toLowerCase());

    let validSentences = [];
    let invalidSentences = [];

    for (let sentence of sentences) {
        if (isEveryCompanyContained(companies, sentence)) {
            validSentences.push(sentence); 
        } else {
            invalidSentences.push(sentence);
        }
    }


    if (validSentences.length !== 0 && invalidSentences.length !== 0) {
        console.log('ValidSentences');
        let count = 0;
        validSentences.forEach(x => console.log(`${++count}. ${x}`));
        console.log('==============================');
        console.log('InvalidSentences');
        count = 0;
        invalidSentences.forEach(x => console.log(`${++count}. ${x}`));
    } else if (validSentences.length !== 0) {
        console.log('ValidSentences');
        let count = 0;
        validSentences.forEach(x => console.log(`${++count}. ${x}`));
    } else {
        console.log('InvalidSentences');
        count = 0;
        invalidSentences.forEach(x => console.log(`${++count}. ${x}`));
    }

    function isEveryCompanyContained(companies, sentence) {
        for (let company of companies) {
            if (!sentence.includes(company)) {
                return false;
            }
        }

        return true;
    }
}

travelInvestigation(["bulgariatour@, minkatrans@, koftipochivkaltd",
"@,",
"Mincho  e KoftiPockivkaLTD Tip 123  ve MinkaTrans BulgariaTour",
"We will koftipochivkaLTD travel e expenses no MinkaTrans mu e BulgariaTour",
"dqdo BuLGariaTOUR mraz some text but is KoftiPochivkaLTD minkaTRANS"]

);