function bitcoinMining(arrStr) {
    let shifts = arrStr.map(x => Number(x));
    let currentMoney = 0;
    let firstBitcoinBoughtDay = -1;
    let bitcoins = 0;
    let cnt = 0;
    for (let shift of shifts) {
        cnt++;
        if (cnt % 3 === 0) {
            shift -= shift * 30 / 100;
        }
        currentMoney += shift * 67.51;
        if (currentMoney >= 11949.16) {
            bitcoins++;
            if (firstBitcoinBoughtDay === -1) {
                firstBitcoinBoughtDay = cnt;
            }
            currentMoney -= 11949.16;
        }

        while (currentMoney >= 11949.16) {
            bitcoins++;
            currentMoney -= 11949.16;
        }
    }

    console.log(`Bought bitcoins: ${bitcoins}`);
    if (firstBitcoinBoughtDay !== -1) {
        console.log(`Day of the first purchased bitcoin: ${firstBitcoinBoughtDay}`);
    }
    console.log(`Left money: ${currentMoney.toFixed(2)} lv.`);
}

bitcoinMining([1, 2511.124]);