function travelPlans(strings) {
    let gold = 0;
    let specializedProfessions = ['Programming', 'Hardware maintenance', 'Cooking', 'Translating', 'Designing'];
    let averageProfessions = ['Driving', 'Managing', 'Fishing', 'Gardening'];
    let clumsyProfessions = ['Singing', 'Accounting', 'Teaching', 'Exam-Making', 'Acting', 'Writing', 'Lecturing', 'Modeling', 'Nursing'];
    let numberOfSpecializedProfessions = 0;
    let numberOfClumsyProfessions = 0;
    for (let string of strings) {
        let tokens = string.split(' : ');
        let profession = tokens[0];
        let currentGold = Number(tokens[1]);
        if (specializedProfessions.includes(profession)) {
            if (currentGold < 200) {
                continue;
            }
            numberOfSpecializedProfessions++;
            currentGold = currentGold * 80 / 100;
            gold += currentGold;
            if (numberOfSpecializedProfessions % 2 === 0) {
                gold += 200;
            }
        } else if (averageProfessions.includes(profession)) {
            gold += currentGold;
        } else if (clumsyProfessions.includes(profession)) {
            numberOfClumsyProfessions++;
            if (numberOfClumsyProfessions % 2 === 0) {
                gold += currentGold * 95 / 100;
            } else if (numberOfClumsyProfessions % 3 === 0) {
                gold += currentGold * 90 / 100;
            } else {
                gold += currentGold;
            }
        }
    }

    if (gold < 1000) {
        console.log(`Final sum: ${gold.toFixed(2)}`);
        console.log(`Mariyka need to earn ${(1000 - gold).toFixed(2)} gold more to continue in the next task.`);
    } else {
        console.log(`Final sum: ${gold.toFixed(2)}`);
        console.log(`Mariyka earned ${(gold - 1000).toFixed(2)} gold more.`);
    } 
}

travelPlans(["Programming : 500", "Driving : 243.55", "Acting : 200", "Singing : 100", "Cooking : 199", "Hardware maintenance : 800", "Gardening : 700", "Programming : 500"]);