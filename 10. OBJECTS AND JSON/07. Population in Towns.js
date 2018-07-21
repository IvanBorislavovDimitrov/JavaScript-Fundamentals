function populationsInTows(townsArr) {
    let towns = new Map();
    for (let townStr of townsArr) {
        let townTokens = townStr.split(' <-> ').map(s => s.trim());
        let townName = townTokens[0];
        let townPopulation = Number(townTokens[1]);
        if (towns.get(townName) === undefined) {
            towns.set(townName, townPopulation);
        } else {
            let old = towns.get(townName);

            let newPop = Number(old) + Number(townPopulation);
            towns.set(townName, newPop);
        }
    }

    towns.forEach((value, key) => console.log(`${key} : ${value}`));
}

populationsInTows(['Sofia <-> 10000', 'Sofia <-> 12']);