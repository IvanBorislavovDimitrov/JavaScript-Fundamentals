function restaurantBill(orders) {
    let products = [];
    let prices = [];
    for (let i = 0; i < orders.length; i++) {
        if (i % 2 !== 0) {
            prices.push(Number(orders[i]));
        } else {
            products.push(orders[i]);
        }
    }

    console.log(`You purchased ${products.join(', ')} for a total sum of ${prices.reduce((a, b) => a + b)}`);
}