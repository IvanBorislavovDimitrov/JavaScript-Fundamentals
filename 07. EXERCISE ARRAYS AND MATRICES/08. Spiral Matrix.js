function spiralMatrix(rows, cols) {
    let matrix = [];
    cols = rows;
    for (let i = 0; i < rows; i++) {
        matrix[i] = [];
    }

    let count = 1;

    let rs = 0, cs = 0;     // RowStart and Column Start
    let re = rows - 1, ce = cols - 1;  // RowEnd & columnEnd

    while (rs <= re && cs <= ce) {
        let i = rs, j = cs;

        for (j = cs; j <= ce; j++) {
            matrix[i][j] = count++;
        }

        for (i = rs + 1, j--; i <= re; i++) {
            matrix[i][j] = count++;
        }

        for (j = ce - 1, i--; j >= cs; j--) {
            matrix[i][j] = count++;
        }

        for (i = re - 1, j++; i >= rs + 1; i--) {
            matrix[i][j] = count++;
        }

        rs++;
        cs++;
        re--;
        ce--;
    }

    print(matrix);

    function print(matrix) {
        let res = '';
        for (let rows of matrix) {
            for (let num of rows) {
                res += num + ' ';
            }
            res += '\n';
        }

        console.log(res);
    }
}