const fibonacci = function(x) {
    let array = [1, 1, ];
    let a = array[0];
    let b = array[1];
    let c;
    if (x == 1 || x == 2) return 1;
    if (x <= 0) return 'OOPS';
    for (let i = 0; i < x - 2; i++) {
        c = a + b;
        array.push(c);
        a = array[i + 1];
        b = array[i + 2];
    }
    return c;
};

// Do not edit below this line
module.exports = fibonacci;
