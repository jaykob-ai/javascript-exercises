const reverseString = function(string) {
    const array = string.split('');
    let newArray = '';
    for (let i = 0; i <= string.length - 1; i++) {
            newArray += array.splice(array.length-1, 1);
    }
    newArray.toString();
    return newArray;
};

// Do not edit below this line
module.exports = reverseString;
