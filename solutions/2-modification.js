// BEGIN
const swap = (arr) => {
    if (arr.length < 2) return arr; 
    else {
        const firstSymbol = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = firstSymbol;
        return arr;
    }
}

export {swap};
// END