function compoundInterest(info) {
    let p = info[0];
    let i = info[1];
    let n = info[2];
    let t = info[3];

    let compoundInterest = p * Math.pow(1 + i / (100 * (12 / n)), 12 / n * t);

    console.log(compoundInterest.toFixed(2));
}

compoundInterest([1500, 4.3, 3, 6]);