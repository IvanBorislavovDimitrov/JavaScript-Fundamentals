'use strict';

function oddEven(input) {
    let fruits = ['banana', 'apple', 'kiwi', 'cherry', 'lemon', 'grapes', 'peach'];
    let vegetables = ['tomato', 'cucumber', 'pepper', 'onion', 'garlic', 'parsley'];

    console.log(fruits.includes(input) ? 'fruit' : vegetables.includes(input) ? 'vegetable' : 'unknown');
}

oddEven('cucumber');
