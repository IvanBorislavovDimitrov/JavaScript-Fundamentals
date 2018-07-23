function gladiatorExpenses(lostFights, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let price = 0;
    let helmetBrokenTimes = 0;
    let swordBrokenTimes = 0;
    let shieldBrokenTimes = 0;
    let armorBrokenTimes = 0;
    for (let i = 1; i <= lostFights; i++) {
        if (i % 2 === 0) {
            helmetBrokenTimes++;
        }   
        if (i % 3 === 0) {
            swordBrokenTimes++;
        }
        if (i % 6 === 0) {
            shieldBrokenTimes++;
        }
        if (i % 12 === 0 && shieldBrokenTimes !== 0) {
            armorBrokenTimes++;
        }
    }

    price = helmetBrokenTimes * helmetPrice + swordBrokenTimes *
     swordPrice + shieldBrokenTimes * shieldPrice + armorBrokenTimes * armorPrice;

     console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`);
}