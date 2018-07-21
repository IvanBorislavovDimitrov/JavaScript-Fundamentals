function firstAndLastNumbers(numbers) {
    let res1 = '';
    let res2 = '';
    let count = numbers[0];
    for (let i = 1; i <= count; i++) {
        res1 += numbers[i] + ' ';
    }
    for (let i = numbers.length - count; i < numbers.length; i++) {
        res2 += numbers[i] + ' ';
    }

    console.log(res1);
    console.log(res2);
}
