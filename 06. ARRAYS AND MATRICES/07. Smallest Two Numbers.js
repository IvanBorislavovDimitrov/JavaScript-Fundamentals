function smallestTwoNumbers(numbers) {
    numbers.sort((n1, n2) => n1 - n2);
    console.log(numbers[0] + ' ' + numbers[1]);
}