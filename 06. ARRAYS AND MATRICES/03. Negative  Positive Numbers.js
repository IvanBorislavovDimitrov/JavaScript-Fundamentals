function negativePositiveNumbers(numbers) {
    let arr = [];
    for (let num of numbers) {
        if (num < 0) {
            arr.unshift(num);
        } else {
            arr.push(num);
        }
    }

    for (let num of arr) {
        console.log(num);
    }
}