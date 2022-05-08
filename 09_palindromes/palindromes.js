const palindromes = function (str = "") {
  // let re = /[\W_]/g;
  let re = /[^A-Za-z0-9]/g;
  let lowerRegexStr = str.toLowerCase().replace(re, "");
  let reversedStr = lowerRegexStr.split("").reverse().join("");
  return reversedStr === lowerRegexStr;
};

// Do not edit below this line
module.exports = palindromes;
