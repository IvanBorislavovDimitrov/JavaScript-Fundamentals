'use strict';

function heroicInventory(heroesArr) {
    let heroes = [];

    for (let heroInfo of heroesArr) {
        let tokens = heroInfo.split(/\s*\/\s*/);
        let heroName = tokens[0];
        let heroLevel = Number(tokens[1]);
        let heroItems = [];
        if (tokens.length === 3) {
            heroItems = tokens[2].split(/\s*,\s*/);
        }
        let hero = {
            name: heroName,
            level: heroLevel,
            items: heroItems
        };

        heroes.push(hero);
    }

    return JSON.stringify(heroes);
}

console.log(heroicInventory([
    'Jake / 1000 / Gauss, HolidayGrenade',
]));