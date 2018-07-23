function gladiatorInventory(input) {
    let inventory = [];
    let currentInventory = input.shift().split(' ');
    currentInventory.forEach(c => {
        if (!inventory.includes(c)) {
            inventory.push(c);
        }
    });

    for (let itemInfo of input) {
        let tokens = itemInfo.split(/\s+/g);
        let command = tokens[0];
        switch (command) {
            case 'Buy':
                if (!inventory.includes(tokens[1])) {
                    inventory.push(tokens[1]);
                }
                break;
            case 'Trash':
                deleteItem(inventory, tokens[1]);
                break;
            case 'Repair':
                repairItem(inventory, tokens[1]);
                break;
            case 'Upgrade':
                let tokens1 = tokens[1].split('-');
                upgradeItem(inventory, tokens1[0], tokens1[1]);
                break;
        }
    }

    function upgradeItem(inventory1, item, upgrade) {
        for (let i = 0; i < inventory1.length; i++) {
            if (inventory1[i] === item) {
                let arr1 = inventory1.splice(0, i + 1);
                let res = item + ':' + upgrade;
                let arr2 = inventory1.splice(i);
                if (!arr1.includes(res) && !arr2.includes(res))
                    arr1.push(res);
                inventory = [];
                for (let a of arr1) {
                    if (a !== undefined)
                        inventory.push(a);
                }
                for (let a of arr2) {
                    if (a !== undefined)
                        inventory.push(a);
                }
                break;
            }
        }
    }

    function deleteItem(inventory1, item) {
        for (let i = 0; i < inventory1.length; i++) {
            if (inventory1[i].includes(item)) {
                delete inventory1[i];
            }
        }
        inventory = [];
        for (let a of inventory1) {
            if (a !== undefined)
                inventory.push(a);
        }
    }

    function repairItem(inventory1, item) {
        for (let i = 0; i < inventory1.length; i++) {
            if (inventory1[i] === item) {
                let it = inventory1[i];
                delete inventory1[i];
                inventory1.push(it);
                break;
            }
        }
        inventory = [];
        for (let a of inventory1) {
            if (a !== undefined) {
                inventory.push(a);
            }
        }
    }

    let res = ''
    inventory.forEach(x => {
        if (x !== undefined) {
            res += x + ' '
        }
    });
    console.log(res);
}