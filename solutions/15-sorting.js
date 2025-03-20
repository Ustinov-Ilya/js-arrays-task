// BEGIN
export const bubbleSort = (arr) => {
    const n = arr.length;
    for (let j = 1; j < n; j++) {
        let isSorted = true;
        for (let i = 0; i < arr.length; i++) {
            let currentNumber = arr[i];
            let nextNumber = arr[i + 1];
            if (arr[i] > arr[i + 1]) {
                arr[i] = nextNumber;
                arr[i + 1] = currentNumber;
                isSorted = false;
            }
        }
        if (isSorted) break;
    }
    return arr;
}

export default bubbleSort;
// END