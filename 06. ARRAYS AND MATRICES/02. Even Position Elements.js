function evenPositionElement(elements) {
    let res = "";
    for (let i = 0; i < elements.length; i++) {
        if (i % 2 === 0) {
            res += elements[i] + " ";
        }
    }

    console.log(res);
}
