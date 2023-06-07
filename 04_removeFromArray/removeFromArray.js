const removeFromArray = function(array, num, num1, num2, num3) {
    let index = array.indexOf(num);
    if (index === -1) {
    } else {
        array.splice(index, 1);
    }
    if (num1) {
        index = array.indexOf(num1);
        if (index === -1) {
        } else {
            array.splice(index, 1);
        }
    }
    if (num2) {
        index = array.indexOf(num2);
        if (index === -1) {
        } else {
            array.splice(index, 1);
        }
    }
    if (num3) {
        index = array.indexOf(num3);
        if (index === -1) {
        } else {
            array.splice(index, 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
