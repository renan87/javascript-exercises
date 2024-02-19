const add = function(val1, val2) {
	return val1+val2;
};

const subtract = function(val1, val2) {
	return val1-val2;
};

const sum = function(array) {
	return array.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};

const multiply = function(array) {
  return array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);
};

const power = function(val,power) {
	return Math.pow(val,power);
};

const factorial = function(value) {
  if (value === 0) return 1;

	let factorialResult = 1;

  for (i = 1; i <= value; i++) {
    factorialResult = factorialResult * i;
  }
  return factorialResult;
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
