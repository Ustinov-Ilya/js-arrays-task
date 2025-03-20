// BEGIN
export const getTotalAmount = (money, name) => {
    let total = 0;
    for (const currency of money) {
        if (currency.slice(0,3) === name) {
            total += Number(currency.slice(3));
        }
    }

    return total;
}

export default getTotalAmount;
// END