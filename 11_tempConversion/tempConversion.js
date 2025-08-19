const convertToCelsius = function(farenheit) {
  const celsius = (farenheit - 32) * 5 / 9
  return celsius;
};

const convertToFahrenheit = function(celsius) {
  const farenheit = (celsius * 9/5) + 32;
  return farenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
