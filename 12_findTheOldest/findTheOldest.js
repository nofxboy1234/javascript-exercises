const findTheOldest = function (array = []) {
  return array.reduce((oldest, person) => {
    // return person;
    const todayDate = new Date();
    const currentYear = todayDate.getFullYear();
    oldest.yearOfDeath = !oldest.yearOfDeath ? currentYear : oldest.yearOfDeath;

    return person.yearOfDeath - person.yearOfBirth >
      oldest.yearOfDeath - oldest.yearOfBirth
      ? person
      : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
