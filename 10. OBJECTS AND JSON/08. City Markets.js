function cityMarkets(townsWithProductsArr) {

    let towns = new Map();

    for (let townStr of townsWithProductsArr) {
        let tokens = townStr.split(' -> ');
        let townName = tokens[0];
        let townProduct = tokens[1];
        let productPrice = Number(tokens[2].split(':')[0]) * Number(tokens[2].split(':')[1]);
        if (towns.get(townName) === undefined) {
            towns.set(townName, []);
            towns.get(townName).push(townProduct + ' : ' + productPrice);
        } else {
            towns.get(townName).push(townProduct + " : " + productPrice);
        }
    }

    towns.forEach((value, key) => {
        console.log(`Town - ${key}`);
        value.forEach(town => console.log(`$$$${town}`));
    });

}

cityMarkets([
    'Sofia -> Laptops HP -> 200 : 2000',
    'Sofia -> Raspberry -> 200000 : 1500',
    'Sofia -> Audi Q7 -> 200 : 100000',
    'Montana -> Portokals -> 200000 : 1',
    'Montana -> Qgodas -> 20000 : 0.2',
    'Montana -> Chereshas -> 1000 : 0.3',
]);