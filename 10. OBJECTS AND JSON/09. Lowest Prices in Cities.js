'use strict';

function lowestPricesInCities(productsAndCitiesArr) {
    let products = new Map();
    for (let line of productsAndCitiesArr) {
        let tokens = line.split(' | ');
        let townName = tokens[0];
        let productName = tokens[1];
        let productPrice = Number(tokens[2]);
        if (!products.has(productName)) {
            products.set(productName, {
                town: townName,
                price: productPrice
            });
        } else {
            let currentPrice = products.get(productName).price;
            if (currentPrice > productPrice || products.get(productName).town === townName) {
                products.set(productName, {
                    town: townName,
                    price: productPrice
                });
            }
        }
    }

    products.forEach((value, key) => console.log(`${key} -> ${value.price} (${value.town})`));
}

lowestPricesInCities([
    'Sofia City | Audi | 100000',
    'Sofia City | BMW | 100000',
    'Sofia City | Mitsubishi | 10000',
    'Sofia City | Mercedes | 10000',
    'Sofia City | NoOffenseToCarLovers | 0',
    'Mexico City | Audi | 1000',
    'Mexico City | BMW | 99999',
    'New York City | Mitsubishi | 10000',
    'New York City | Mitsubishi | 1000',
    'Mexico City | Audi | 100000',
    'Washington City | Mercedes | 1000',

]);