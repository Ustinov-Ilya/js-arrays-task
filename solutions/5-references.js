// BEGIN
export const reverse = (arr) => {
    let middle = arr.length / 2;
    if (arr.length % 2 !== 0) {
        middle = (arr.length - 1) / 2;
    }
    for (let i = 0; i < middle; i++) {
        const currentElement = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = currentElement;
    }
    return arr;
}

export default reverse;
// END