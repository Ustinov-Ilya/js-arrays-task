// BEGIN
export const calculateAverage = (arr) => {
    if (arr.length === 0) return null;
    let sum = 0;
    const countElements = arr.length;
    for (let value of arr) {
        sum += value;
    }
    return sum / countElements;
}

export default calculateAverage;
// END