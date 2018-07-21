'use strict';

function calc(p1, p2, sign) {
    function sum(a, b) {
        return a + b;
    }
    function subtract(a, b) {
        return a - b;
    }
    function divide(a, b) {
        return a / b;
    }
    function multiply(a, b) {
        return a * b;
    }
    
    switch (sign) {
        case '+':
            return sum(p1, p2);
        case '/':
            return divide(p1, p2);
        case '-':
            return subtract(p1, p2);
        case '*':
            return multiply(p1, p2);
    }
}


console.log(calc(2, 3, '*'));