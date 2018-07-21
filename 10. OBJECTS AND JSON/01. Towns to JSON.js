function getTownsInJSON(townArr) {
    townArr.shift();
    let towns = [];
    for (let townInfo of townArr) {
        let townTokens = townInfo.split('|')
            .filter(t => t !== '')
            .map(t => t.trim());

        let town = {
            Town: townTokens[0],
            Latitude: Number(townTokens[1]),
            Longitude: Number(townTokens[2])
        };

        towns.push(town);
    }

    return JSON.stringify(towns);
}