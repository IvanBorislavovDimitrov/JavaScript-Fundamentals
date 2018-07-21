function rotateArray(arr) {
    let rotationsCount = arr.pop();
    for (let i = 0; i < rotationsCount % arr.length; i++) {
        arr.unshift(arr.pop());
    }

    console.log(arr.join(' '));
}
