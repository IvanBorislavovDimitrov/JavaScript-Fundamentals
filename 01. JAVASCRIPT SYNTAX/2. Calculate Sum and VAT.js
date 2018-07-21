function calculate(numbers) {
    let sumOfThreeNumbers = 0;
    for (let i = 0; i < numbers.length; i++) {
        sumOfThreeNumbers += numbers[i];
    }
    let vat = sumOfThreeNumbers * 20.0 / 100;
    let total = sumOfThreeNumbers + vat;

    console.log(`sum = ${sumOfThreeNumbers}`);
    console.log(`VAT = ${vat}`);
    console.log(`total = ${total}`);
}