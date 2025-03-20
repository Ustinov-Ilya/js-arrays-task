// BEGIN
export const flatten = (arr) => {
    if (arr.length === 0) return [];
    let flat = [];
    for (const element of arr) {
      if (Array.isArray(element) === true){
        flat.push(...element);
      } else {
        flat.push(element);
      }
    }
    return flat;
}
// END