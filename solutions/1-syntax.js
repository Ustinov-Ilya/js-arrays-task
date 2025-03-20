// BEGIN (write your solution here)
const getWeekends = (displayFormat) => {
    const arrLong = ['saturday', 'sunday'];
    const arrShort = ['sat', 'sun'];
    if (displayFormat === 'short') {
        return arrShort;
    } else {
        return arrLong;
    }
};

export {getWeekends};
// END
