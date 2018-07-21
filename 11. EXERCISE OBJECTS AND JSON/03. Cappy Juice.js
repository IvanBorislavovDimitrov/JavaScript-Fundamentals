'use strict'

function cappyJuice(juicesArr) {
    let juices = new Map();
    let juicesWithBottles = new Map();
    
    for (let juiceStr of juicesArr) {
        let tokens = juiceStr.split(' => ');
        let juiceName = tokens[0];
        let juiceQuantity = Number(tokens[1]);
        if (!juices.has(juiceName)) {
            juices.set(juiceName, juiceQuantity);
            if (juices.get(juiceName) >= 1000) {
                if (!juicesWithBottles.has(juiceName)) {
                    juicesWithBottles.set(juiceName, Math.floor(juices.get(juiceName) / 1000));
                } else {
                    juicesWithBottles.set(juiceName, Math.floor(juices.get(juiceName) / 1000) + juicesWithBottles.get(juiceName));
                }
                juices.set(juiceName, juiceQuantity % 1000);    
            }
        } else {
            juices.set(juiceName, juices.get(juiceName) + juiceQuantity);
            if (juices.get(juiceName) >= 1000) {
                if (!juicesWithBottles.has(juiceName)) {
                    juicesWithBottles.set(juiceName, Math.floor(juices.get(juiceName) / 1000));
                } else {
                    juicesWithBottles.set(juiceName, Math.floor(juices.get(juiceName) / 1000) + juicesWithBottles.get(juiceName));
                }
                juices.set(juiceName, juiceQuantity % 1000);
            }
        }
    }

    juicesWithBottles.forEach((value, key) => {
        console.log(`${key} => ${value}`);
    });
}

cappyJuice([
    'Kiwi => 234',
    'Pear => 2345',
    'Watermelon => 3456',
    'Kiwi => 4567',
    'Pear => 5678',
    'Watermelon => 6789',

]);