// BEGIN
export const calculateSum = (arr) => {
    if (arr.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        const currentElement = arr[i];
        if (currentElement % 3 === 0) {
            sum += currentElement;
        }
    }
    return sum;
    
}

export default calculateSum;
// END