function biggestElement(matrix) {
    let biggest = matrix[0][0];
    for (let row of matrix) {
        for (let num of row) {
            if (num > biggest) {
                biggest = num;
            }
        }
    }

    console.log(biggest);
}