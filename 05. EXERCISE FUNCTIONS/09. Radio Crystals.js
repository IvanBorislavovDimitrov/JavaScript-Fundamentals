'use strict';

function radioCrystals(crystals) {
    let desiredThickness = crystals[0];

    for (let i = 1; i < crystals.length; i++) {
        console.log(`Processing chunk ${crystals[i]} microns`);
        let currentCrystal = crystals[i];
        let count = 0;
        while (true) {
            if (currentCrystal / 4 >= desiredThickness) {
                currentCrystal /= 4;
                count++;
            } else {
                break;
            }
        }

        if (count !== 0) {
            console.log(`Cut x${count}`);
            currentCrystal = Math.floor(currentCrystal);
            console.log('Transporting and washing');
            count = 0;
        }

        while (true) {
            if (currentCrystal - currentCrystal * 20 / 100 >= desiredThickness) {
                currentCrystal -= (currentCrystal * 20 / 100);
                count++;
            } else {
                break;
            }
        }

        if (count !== 0) {
            console.log(`Lap x${count}`);
            currentCrystal = Math.floor(currentCrystal);
            console.log('Transporting and washing');
            count = 0;
        }

        while (true) {
            if (currentCrystal - 20 >= desiredThickness) {
                currentCrystal -= 20;
                count++;
            } else {
                break;
            }
        }

        if (count !== 0) {
            console.log(`Grind x${count}`);
            currentCrystal = Math.floor(currentCrystal);
            console.log('Transporting and washing');
            count = 0;
        }

        while (true) {
            if (currentCrystal - 2 >= desiredThickness - 1) {
                currentCrystal -= 2;
                count++;
            } else {
                break;
            }
        }

        if (count !== 0) {
            console.log(`Etch x${count}`);
            currentCrystal = Math.floor(currentCrystal);
            console.log('Transporting and washing');
            count = 0;
        }

        if (currentCrystal < desiredThickness) {
            console.log(`X-ray x1`);
            currentCrystal++;
            console.log(`Finished crystal ${currentCrystal} microns`);
        } else {
            console.log(`Finished crystal ${currentCrystal} microns`);

        }
    }
}

radioCrystals([1000, 4000, 8100]);