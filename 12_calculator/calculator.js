const add = function(a, b) {
      let result = a + b;
      return result;
};

const subtract = function(a, b) {
    let result = a - b;
    return result;
  };

const sum = function(array) {
  return array.reduce ((a, b) => a + b, 0);
};

const multiply = function(array) {
  return array.reduce ((a, b) => a * b, 1);
};

const power = function(a, b) {
	let result = a ** b;
  return result;
};

const factorial = function(n) {
	if (n === 0) {
    return 1;
  }
  const numbers = Array.from({ length: n }, (_, i) => i + 1); 
  return numbers.reduce((a, b) => a * b, 1);
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
