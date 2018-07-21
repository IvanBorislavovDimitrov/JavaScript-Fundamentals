function lastKNumbersSequence(length, count) {
    let sequence = [];
    sequence.push(1);
    for (let i = 1; i < length; i++) {
        let num = getNumber(sequence, i - 1, count);
        sequence.push(num);
    }

    printSequence(sequence);

    function printSequence(sequence) {
        let res = '';
        for (let num of sequence) {
            res += num + ' ';
        }
        console.log(res);
    }
    
    function getNumber(sequence, index, count) {
        let sum = 0;
        let start = index;
        for (let i = 0; i < count; i++) {
            if (start === -1) {
                return sum;
            }
            sum += sequence[start--];
        }

        return sum;
    }
}