const reverseString = function(string) {
  let reversedArray = string.split('').reverse();
  let reversedString = reversedArray.join('');
  
  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
