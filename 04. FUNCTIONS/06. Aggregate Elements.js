function aggregateElements(numbers) {
    let sum = function(numbs) {
        let a = 0;
        for (const n of numbers) {
            a += n;
        }

        return a;
    };

    let sumInverse = function(numbs) {
        let a = 0;
        for (const n of numbers) {
            a += 1 / n;
        }

        return a;
    };

    let concatenated = function(numbs) {
        let str = "";
        for (const n of numbers) {
            str += n;
        }

        return str;
    };

    console.log(sum(numbers));
    console.log(sumInverse(numbers));
    console.log(concatenated(numbers));
}
