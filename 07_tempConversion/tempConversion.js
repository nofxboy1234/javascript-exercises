const ftoc = function (temperature) {
  celsiusTemperature = (temperature - 32) * (5 / 9);
  let roundedTemp = Math.round(celsiusTemperature * 10) / 10;
  return roundedTemp;
};

const ctof = function (temperature) {
  fahrenheitTemperature = temperature * (9 / 5) + 32;
  let roundedTemp = Math.round(fahrenheitTemperature * 10) / 10;
  return roundedTemp;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
