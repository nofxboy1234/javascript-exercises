const removeFromArray = function (array, remove) {
  // let args = Array.from(arguments);
  // let args = [...arguments];
  // console.log(args);

  for (let i = 1; i < arguments.length; i++) {
    // console.log(arguments[i]);

    const removeIndex = array.indexOf(arguments[i]);
    if (removeIndex > -1) {
      array.splice(removeIndex, 1);
    }
  }

  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
