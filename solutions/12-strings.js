// BEGIN
export const makeCensored = (text, stopWord) => {
    const separator = ' ';
    const result = [];
    const words = text.split(separator);
    for (let word of words) {
        (stopWord.includes(word) === true) ? result.push('$#%!') : result.push(word);
    }
    return result.join(separator);
}

export default makeCensored;
// END