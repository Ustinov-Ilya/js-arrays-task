const _ = require("lodash"); 

// BEGIN
export const getSameCount = (arr1, arr2) => {
    let countUniqueValues = 0;
    const uniqArr1 = _.uniq(arr1);
    const uniqArr2 = _.uniq(arr2);
    for (let value1 of uniqArr1){
        for (let value2 of uniqArr2){
            if (value1 === value2){
                countUniqueValues += 1;
            }
        }
    }
    return countUniqueValues;
} 

export default getSameCount;
// END