function count(string) {
  if (string.length === 0) {
    return {};
  } else {
    var obj = {};
    var repeats = [];
    str = string;

    for (x = 0, length = str.length; x < length; x++) {
      var l = str.charAt(x);
      obj[l] = isNaN(obj[l]) ? 1 : obj[l] + 1;
    }
    return obj;
  }
}
// Reformatted
function count(string) {
  return string.split("").reduce(function (counts, char) {
    counts[char] = (counts[char] || 0) + 1;
    return counts;
  }, {});
}
