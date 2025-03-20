// BEGIN
const get = (arr, index, def = null) => {
    if (index >= 0 && index < arr.length) return arr[index];
    else return def;
}

export {get};
// END