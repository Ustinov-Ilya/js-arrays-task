// BEGIN
export const getSameParity = (arr) => {
    if (arr.lenght === 0) return [];
    
    let isEven = true;
    const element = Math.abs(arr[0])

    if (element % 2 === 0) {
        isEven = true;
    } else {
        isEven = false;
    }

    let result = [];
    for (let value of arr) {
        if ((Math.abs(value) % 2 === 0) === isEven){
            result.push(value)
        }
    }

    return result;
}

export default getSameParity;
// END