'use strict';

function printPeople(minAge, firstPeronName, firstPersonAge, secondPersonName, secondPersonAge) {
    let firstPerson = {
        "name": firstPeronName,
        "age": firstPersonAge
    };

    let secondPerson = {
        "name": secondPersonName,
        "age": secondPersonAge
    };

    let people = [];
    people.push(firstPerson);
    people.push(secondPerson);

    for (const person of people) {
        if (person.age >= minAge) {
            console.log(person);
        }
    }
}

printPeople(12, 'Ivan', 15, 'Asen', 9);


