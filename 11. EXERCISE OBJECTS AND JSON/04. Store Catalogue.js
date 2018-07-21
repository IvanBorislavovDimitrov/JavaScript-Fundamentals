'use strict'

function storeCatalogue(productsArr) {
    class Product {
        constructor(name, price) {
            this.name = name;
            this.price = price;
        }
    }

    let productsByFirstLetter = new Map();
    for (let productStr of productsArr) {
        let tokens = productStr.split(' : ');
        let productName = tokens[0];
        let productPrice = Number(tokens[1]);
        let productFirstLetter = productName[0];
        if (!productsByFirstLetter.has(productFirstLetter)) {
            productsByFirstLetter.set(productFirstLetter, []);
            productsByFirstLetter.get(productFirstLetter).push(new Product(productName, productPrice));
        } else {
            productsByFirstLetter.get(productFirstLetter).push(new Product(productName, productPrice));
        }
    }
    
    let sortedProdcutsByFirstLetter = [...productsByFirstLetter].sort((k1, k2) => k1[0].localeCompare(k2[0]));

    sortedProdcutsByFirstLetter.forEach((param) => {
        console.log(param[0]);
        param[1].sort((p1, p2) => p1.name.toLowerCase().localeCompare(p2.name.toLowerCase())).forEach(product => {
            console.log(`${product.name}: ${product.price}`);
        });
    });
}

storeCatalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10',
]);