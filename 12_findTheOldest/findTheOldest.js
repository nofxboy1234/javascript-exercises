const findTheOldest = function (array = []) {
  return array.reduce((oldest, person) => {
    // return person;
    return person.yearOfDeath - person.yearOfBirth >
      oldest.yearOfDeath - oldest.yearOfBirth
      ? person
      : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
