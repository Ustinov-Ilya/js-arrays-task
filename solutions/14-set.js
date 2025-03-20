// BEGIN
export const countUniqChars = (text) => {
    if (text.length === 0) return 0;
    let count = [];
    for (let i = 0; i < text.length; i++) {
        if (count.includes(text[i]) === false) {
            count.push(text[i]);
        }
    }
    return count.length;
}

export default countUniqChars;
// END