const removeFromArray = function (array, remove) {
  //   // let args = Array.from(arguments);
  //   // let args = [...arguments];
  //   // console.log(args);

  for (let i = 1; i < arguments.length; i++) {
    // console.log(arguments[i]);

    const removeIndex = array.indexOf(arguments[i]);
    if (removeIndex > -1) {
      array.splice(removeIndex, 1);
    }
  }

  return array;
};

// // Do not edit below this line
// module.exports = removeFromArray;

// we have 2 solutions here, an easier one and a more advanced one.
// The easiest way to get an array of all of the arguments that are passed to a function
// is using the rest operator. If this is unfamiliar to you look it up!
// const removeFromArray = function (...args) {
//   args.forEach((item) => {
//     console.log(item);
//   });

//   // the very first item in our list of arguments is the array, we pull it out with args[0]
//   const array = args[0];
//   // create a new empty array
//   const newArray = [];
//   // use forEach to go through the array
//   array.forEach((item) => {
//     // push every element into the new array
//     // UNLESS it is included in the function arguments
//     // so we create a new array with every item, except those that should be removed
//     // console.log(`args: ${args}`);
//     if (!args.includes(item)) {
//       newArray.push(item);
//     }
//   });
//   // and return that array
//   return newArray;
// };

// A simpler, but more advanced way to do it is to use the 'filter' function,
// which basically does what we did with the forEach above.

// var removeFromArray = function (...args) {
//   const array = args[0];
//   return array.filter((val) => !args.includes(val));
// };

module.exports = removeFromArray;
