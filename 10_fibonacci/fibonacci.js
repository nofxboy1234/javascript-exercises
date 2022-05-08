const fibonacci = function (num = 1) {
  if (num < 0) return "OOPS";

  num = Number(num);

  let fibonacciNumbers = [1];
  for (let i = 0; i < num - 1; i++) {
    if (fibonacciNumbers.length === 1) {
      fibonacciNumbers.push(1);
    } else {
      let oneNumBefore = fibonacciNumbers.length - 1;
      let twoNumBefore = fibonacciNumbers.length - 2;
      const sum =
        fibonacciNumbers[oneNumBefore] + fibonacciNumbers[twoNumBefore];
      fibonacciNumbers.push(sum);
    }
  }
  return fibonacciNumbers[fibonacciNumbers.length - 1];
};

// Do not edit below this line
module.exports = fibonacci;
