function ancient(arr) {
    let text = '';
    arr.forEach(element => {
        text += element + ' ';
    });

    let begining = '32656 19759 32763';
    let indexOfBegining = text.indexOf(begining);
    while (indexOfBegining !== -1) {
        let indexOfFirstZero = text.indexOf('0', indexOfBegining + begining.length);
        let indexOfSecondZero = text.indexOf(' 0', indexOfFirstZero);
        let count = Number(text.substring(indexOfFirstZero + 2, indexOfSecondZero).trim());
        let word = text.substring(indexOfSecondZero + 3,
            text.indexOf(' 0', indexOfSecondZero + 1) === -1 ? text.length :
                text.indexOf(' 0', indexOfSecondZero + 1))
                .split(' ')
                .slice(0, count)
                .map(x => Number(x))
                .map(x => String.fromCharCode(x))
                .join('');
            
        console.log(word);


        indexOfBegining = text.indexOf(begining, indexOfBegining + 1);
    }
}