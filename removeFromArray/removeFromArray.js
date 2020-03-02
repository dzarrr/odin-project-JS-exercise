const removeFromArray = function(array, ...e) {
  let results = [];
  for(let i = 0; i < array.length; i++) {
    if (e.includes(array[i])) continue;
    results.push(array[i]);
  }

  return results;
}

module.exports = removeFromArray
