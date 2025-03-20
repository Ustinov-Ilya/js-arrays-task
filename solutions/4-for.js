// BEGIN
export const addPrefix = (arr, prefix) => {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(prefix + " " + arr[i]);
    }
    return newArr;
}

export default addPrefix;
// END