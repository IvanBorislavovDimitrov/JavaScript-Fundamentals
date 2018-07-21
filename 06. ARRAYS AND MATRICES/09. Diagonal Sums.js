function diagonalsInfo(matrix) {
    let leftDiagonalSum = 0;
    let rightDiagonalSum = 0;
    for (let i = 0; i < matrix.length; i++) {
        leftDiagonalSum += matrix[i][i];
    }

    for (let i = matrix.length - 1; i >= 0; i--) {
        rightDiagonalSum += matrix[i][matrix.length - i - 1];
    }

    console.log(leftDiagonalSum + ' ' + rightDiagonalSum);
}