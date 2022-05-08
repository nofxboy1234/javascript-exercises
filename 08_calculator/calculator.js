const add = function (num1, num2) {
  return num1 + num2;
};

const subtract = function (num1, num2) {
  return num1 - num2;
};

const sum = function (arr = []) {
  return arr.reduce((sum, item) => (sum += item), 0);
};

const multiply = function (arr = []) {
  return arr.reduce((product, item) => (product *= item), 1);
};

const power = function (num1, num2) {
  return num1 ** num2;
};

const factorial = function (num) {
  console.log(num);
  return num < 2 ? 1 : num * factorial(num - 1);
  // 5 * factorial(4) * factorial(3) * factorial(2) * factorial(1)
  // 1 * 2 * 3 * 4 * 5 = 120
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
