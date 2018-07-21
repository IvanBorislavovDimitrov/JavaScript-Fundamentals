function diagonalAttack(elements) {
    let matrix = [];
    let cnt = 0;
    for (let element of elements) {
        matrix[cnt++] = element.split(' ').map(n => Number(n));
    }

    let leftDiagonalSum = getLeftDiagonalSum(matrix);
    let rightDiagonalSum = getRightDiagonalSum(matrix);

    if (leftDiagonalSum === rightDiagonalSum) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                if (!isOnDiagonal(row, col)) {
                    matrix[row][col] = leftDiagonalSum;
                }
            }
        }
    }

    printMatrix(matrix);

    function printMatrix(matrix) {
        let res = '';
        for (let row of matrix) {
            res += row.join(' ') + '\n';
        }

        console.log(res);
    }

    function isOnDiagonal(row, col) {
        for (let i = 0; i < matrix.length; i++) {
            if (row === i && col === i) {
                return true;
            } else if (row === i && col === matrix.length - 1 - i) {
                return true;
            }
        }

        return false;
    }

    function getRightDiagonalSum(matrix) {
        let rightDiagonalSum = 0;
        for (let i = 0; i < matrix.length; i++) {
            rightDiagonalSum += matrix[i][matrix.length - 1 - i];
        }

        return rightDiagonalSum;
    }

    function getLeftDiagonalSum(matrix) {
        let leftDiagonalSum = 0;
        for (let i = 0; i < matrix.length; i++) {
            leftDiagonalSum += matrix[i][i];
        }

        return leftDiagonalSum;
    }
}