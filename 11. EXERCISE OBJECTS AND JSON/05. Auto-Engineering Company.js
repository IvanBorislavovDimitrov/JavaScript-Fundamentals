'use strict'

function autoEngineeringCompany(carArr) {
    class Car {
        constructor (model, count) {
            this.model = model;
            this.count = count;
        }
    }

    let cars = new Map();
    for (let carString of carArr) {
        let tokens = carString.split(/\s*\|\s*/);
        let carMake = tokens[0];
        let carModel = tokens[1];
        let modelQuantity = Number(tokens[2]);
        if (!cars.has(carMake)) {
            cars.set(carMake, []);
        }
        let car = getCarByModel(cars.get(carMake), carModel);
        if (car === null) {
            car = new Car(carModel, modelQuantity);
            cars.get(carMake).push(car);
        } else {
            car.count += modelQuantity;
        }
    }

    cars.forEach((value, key) => {
        console.log(key);
        value.forEach(car => {
            console.log(`###${car.model} -> ${car.count}`);
        });
    });

    function getCarByModel(availableModelsForThisMake, model) {
        for (let car of availableModelsForThisMake) {
            if (car.model === model) {
                return car;
            }
        }

        return null;
    }
}

autoEngineeringCompany([
    'Mercedes-Benz | 50PS | 123',
    'Mini | Clubman | 20000',
    'Mini | Convertible | 1000',
    'Mercedes-Benz | 60PS | 3000',
    'Hyunday | Elantra GT | 20000',
    'Mini | Countryman | 100',
    'Mercedes-Benz | W210 | 100',
    'Mini | Clubman | 1000',
    'Mercedes-Benz | W163 | 200',
])