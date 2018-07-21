'use strict';

function travelTime(input) {
    let countries = new Map();
    for (let countryStr of input) {
        let tokens = countryStr.split(' > ');
        let country = tokens[0];
        let town = tokens[1];
        let price = Number(tokens[2]);
        if (!countries.has(country)) {
            countries.set(country, new Map());
        }
        if (!countries.get(country).has(town)) {
            countries.get(country).set(town, price);
        } else {
            if (countries.get(country).get(town) > price) {
                countries.get(country).set(town, price);
            }
        }
    }

    let sortedCountries = [...countries].sort((x1, x2) => x1[0].localeCompare(x2[0]));
    sortedCountries.forEach(country => {
        let res = country[0] + ' -> ';
        let sortedTowns = [...country[1]].sort((x1, x2) => x1[1] - x2[1]);

        sortedTowns.forEach(town => {
            let townFormatted = town[0].substring(0, 1).toUpperCase() + town[0].substring(1);
            res += townFormatted + ' -> ' + town[1] + ' ';
        });

        console.log(res);
    });
}

travelTime([
    'Bulgaria > Sofia > 25000',
    'aaa > Sofia > 1',
    'aa > Orgrimar > 0',
    'Albania > Tirana > 25000',
    'zz > Aarna > 25010',
    'Bulgaria > Lukovit > 10',
]);