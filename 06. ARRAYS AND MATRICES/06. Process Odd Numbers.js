function processOddNumbers(arr) {
    let resArr = [];
    for (let i = 1; i < arr.length; i += 2) {
        resArr.push(arr[i] * 2);
    }

    printRes(resArr);

    function printRes(resArr) {
        resArr.reverse();
        let res = '';
        for (let num of resArr) {
            res += num + ' ';
        }
        console.log(res);
    }

}
