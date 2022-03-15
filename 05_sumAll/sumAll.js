const sumAll = function (int1, int2) {
  if (int1 < 0 || int2 < 0) return "ERROR";
  if (typeof int1 !== "number" || typeof int2 !== "number") return "ERROR";

  let sum = 0;

  if (int2 > int1) {
    for (let i = int1; i <= int2; i++) {
      sum += i;
    }
  } else if (int1 > int2) {
    for (let i = int1; i >= int2; i--) {
      sum += i;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
