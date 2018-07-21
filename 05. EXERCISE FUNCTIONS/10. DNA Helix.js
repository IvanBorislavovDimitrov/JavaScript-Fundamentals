'use strict';

function radioCrystals(count) {
    let queue = [];
    queue.push('A');
    queue.push('T');
    queue.push('C');
    queue.push('G');
    queue.push('T');
    queue.push('T');
    queue.push('A');
    queue.push('G');
    queue.push('G');
    queue.push('G');

    let cnt = 0;
    for (let i = 0; i < count; i++) {
        let str = queue.shift();
        queue.push(str);
        let str1 = queue.shift();
        queue.push(str1);
        let total = str + str1;

        switch (cnt) {
            case 0:
                console.log(`**${total}**`);
                break;
            case 1:
                console.log(`*${total[0]}--${total[1]}*`);
                break;
            case 2:
                console.log(`${total[0]}----${total[1]}`);
                break;
            case 3:
                console.log(`*${total[0]}--${total[1]}*`);
                break;
            case 4:
                console.log(`**${total}**`);
                break;
            case 5:
                console.log(`*${total[0]}--${total[1]}*`);
                break;
            case 6:
                console.log(`${total[0]}----${total[1]}`);
                break;
            case 7:
                console.log(`*${total[0]}--${total[1]}*`);
                break;
        }
        cnt++;
        cnt %= 8;
    }

}

radioCrystals(10);