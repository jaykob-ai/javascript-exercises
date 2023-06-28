const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
  /* let total = 0;
	numbers.forEach( num => {
    total += num
  });
  return total; */
  let total = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  return total;
};

const multiply = function(numbers) {
  let total = numbers.reduce ((multiplier, currentValue) => {
    return multiplier * currentValue;
  }, 1);
  return total;
};

const power = function(x, e) {
  let currentValue = x;
  for (let i = 1; i < e; i++) {
    currentValue *= x
  }
  return currentValue;
};

const factorial = function(x) {
  let total = 1;
  for (let i = 1; i <= x; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
