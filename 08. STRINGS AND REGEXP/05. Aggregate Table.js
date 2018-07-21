function aggregateTowns(towns) {
    let townsMap = [];
    for (let town of towns) {
        let townInfo = town.split('|').filter(t => t.length > 0);
        let townName = townInfo[0].trim();
        let townIncome = Number(townInfo[1].trim());
        townsMap[townName] = townIncome;
    }

    let amount = 0;
    let townNames = [];
    for (let town in townsMap) {
        townNames.push(town);
        amount += townsMap[town];
    }

    console.log(townNames.join(', '));
    console.info(amount);
}