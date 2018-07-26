function airPollution(matrixInStr, commands) {
    let matrix = [];
    for (let s of matrixInStr) {
        matrix.push(s.split(' ').map(x => Number(x)));
    }

    for (let command of commands) {
        let tokens = command.split(' ');
        let commandName = tokens[0];
        let value = Number(tokens[1]);

        switch (commandName) {
            case "breeze":
                breeze(value);
                break;
            case "gale":
                gale(value);
                break;
            case "smog":
                smog(value);
                break;
        }
    }

    let areas = [];

    printPollutedArea();

    function printPollutedArea() {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] >= 50) {
                    areas.push(`[${i}-${j}]`);
                }
            }
        }
        if (areas.length === 0) {
            console.log('No polluted areas');
        } else {
            console.log(`Polluted areas: ${areas.join(', ')}`);
        }
    }

    function breeze(row) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[row][i] -= 15;
            if (matrix[row][i] < 0) {
                matrix[row][i] = 0;
            }
        }
    }
    
    function gale(col) {
        for (let i = 0; i < matrix.length; i++) {
            matrix[i][col] -= 20;
            if (matrix[i][col] < 0) {
                matrix[i][col] = 0;
            }
        }
    }

    function smog(value) {
        for (let i = 0; i < matrix.length; i++) {
            for (let j = 0; j < matrix[i].length; j++) {
                matrix[i][j] += value;
            }
        }
    }
}

airPollution([
        "5 7 2 14 4",
        "21 14 2 5 3",
        "3 16 7 42 12",
        "2 20 8 39 14",
        "7 34 1 10 24",
    ],
    ["breeze 1", "gale 2", "smog 35"]);
