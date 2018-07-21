function magicMatrices(matrix) {

    let rows = matrix.map(r => r.reduce((a, b) => a + b));
    let cols = matrix.reduce((a, b) => a.map((x, i) => x + b[i]));

    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (rows[row] !== cols[col]) {
                console.log(false);
                return;
            }
        }
    }
    console.log(true);
}
