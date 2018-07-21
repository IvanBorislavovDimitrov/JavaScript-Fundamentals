function sumByTown(arr) {
    let towns = {};
    for (let i = 0; i < arr.length; i += 2) {
        let currentValue = towns[arr[i]];
        if (currentValue === undefined) {
            towns[arr[i]] = Number(arr[i + 1]);
        } else {
            towns[arr[i]] = Number(currentValue) + Number(arr[i + 1]);
        }
    }
    return JSON.stringify(towns);
}
