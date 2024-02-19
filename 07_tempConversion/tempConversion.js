const convertToCelsius = function(fTemp) {
  let newTemp = Math.round(((fTemp-32)*(5/9))*10)/10;
  return newTemp;
};

const convertToFahrenheit = function(cTemp) {
  let newTemp = Math.round(((cTemp*(9/5))+32)*10)/10;
  return newTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
