function extractNonDecreasingSubsequences(numbers) {
    while (numbers.length > 0) {
        let number = numbers.shift();
        console.log(number);
        numbers = numbers.filter(n => n >= number);
    }
}