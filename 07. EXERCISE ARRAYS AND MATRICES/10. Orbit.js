function orbit([rows, cols, x, y]) {
    let matrix = [];
    for (let i = 0; i < rows; i++) {
        matrix.push('0'.repeat(cols).split('').map(n => Number(n)));
    }

    let num = 1;
    matrix[x][y] = num;
    let counter = 1;
    let currentRow = x;
    let currentCol = y;

    let filled = true;
    while (filled) {
        filled = false;
        let startRow = Math.max(0, currentRow - counter);
        let endRow = Math.min(matrix.length - 1, currentRow + counter);
        let startCol = Math.max(0, currentCol - counter);
        let endCol = Math.min(matrix[0].length - 1, currentCol + counter);
        num++;
        for (let row = startRow; row <= endRow; row++) {
            for (let col = startCol; col <= endCol; col++) {
                if (matrix[row][col] === 0) {
                    matrix[row][col] = num;
                    filled = true;
                }
            }
        }

        counter++;
    }

    for (let rows of matrix) {
        console.log(rows.join(' '));
    }
}