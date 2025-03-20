// BEGIN
export const getMax = (arr) => {
    if (arr.length === 0) return null;
    let [maxElement, ...elements] = arr;
    for (const element of elements) {
        if (element > maxElement) {
            maxElement = element;
        }
    }
    return maxElement;
}

export default getMax;
// END