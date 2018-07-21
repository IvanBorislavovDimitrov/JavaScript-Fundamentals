function expressionSplit(expression) {
    let splitted  = expression.split(/[ ,();.]/g).filter(n => n.length != 0);

    console.log(splitted.join('\n'));
}