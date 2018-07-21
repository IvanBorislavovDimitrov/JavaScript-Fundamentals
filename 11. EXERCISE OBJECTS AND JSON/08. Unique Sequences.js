'use strict';

function uniqueSequence(arrOfSequences) {
    let uniqueSequences = [];
    let sequences = [];
    for (let seq of arrOfSequences) {
        
        let numbers = seq.substring(1, seq.length - 1).split(', ').map(x => Number(x));
        if (seq.length === 2) {
            numbers = [];
        }
        sequences.push(numbers);
    }
    for (let sequence of sequences) {
        if (isThisArrayUnique(uniqueSequences, sequence)) {
            uniqueSequences.push(sequence);
        }
    }

    uniqueSequences.sort((x1, x2) => x1.length - x2.length).forEach(x => {
        x.sort(function(a, b){return b - a});
        let s = x.toString();
        let k = s.split(',').join(', ');
        console.log(`[${k}]`);
    });

    function isThisArrayUnique(uniqueSequences, currArr) {
        for (let arr of uniqueSequences) {
            if (areArraysEqual(arr, currArr)) {
                return false;
            }
        }

        return true;
    }

    function areArraysEqual(arr1, arr2) {
        if (arr1 === arr2) {
            return false;
        }
        if (arr1.length !== arr2.length) {
            return false;
        }
        arr1.sort(function(a, b){return b - a});
        arr2.sort(function(a, b){return b - a});
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }

        return true;
    }
}

uniqueSequence(["[-3, -2, -1, 0, 1, 2, 3, 4]", "[10, 1, -17, 0, 2, 13]", "[4, -3, 3, -2, 2, -1, 1, 0]", "[1, 2]", "[1, 2]", "[]"]);
