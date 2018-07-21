function addRemove(arr) {
    let start = 1;
    let elements = [];
    arr.forEach(n => {
        switch (n) {
            case 'add':
                elements.push(start++);
                break;
            case 'remove':
                if (elements.length !== 0) {
                    elements.pop();
                }
                start++;
                break;
        }
    });

    console.log(elements.length === 0 ? 'Empty' : elements.join('\n'));
}