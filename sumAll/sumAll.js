const sumAll = function(min, max) {
  let sum = 0;
  if (min < 0 || max < 0 || typeof(min) !== 'number' || typeof(max) !== 'number') {
    return ("ERROR");
  }
  if (min > max) {
    [min, max] = [max, min];
  }
  for(let i = min; i < max + 1; i++) {
    sum += i;
  }

  return sum;
}

module.exports = sumAll
