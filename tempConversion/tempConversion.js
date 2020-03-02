const ftoc = function(temp) {
  let result = (temp-32) * 5/9;
  result = Number.isInteger(result) ? result : parseFloat(result.toFixed(1));

  return (result);
}

const ctof = function(temp) {
  let result = (temp * 9/5) + 32;
  result = Number.isInteger(result) ? result : parseFloat(result.toFixed(1));

  return (result);
}

module.exports = {
  ftoc,
  ctof
}
