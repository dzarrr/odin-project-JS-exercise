const reverseString = function(string) {
  let result = "";
  string.split("").forEach( char => result = char + result );

  return result;
}

module.exports = reverseString
