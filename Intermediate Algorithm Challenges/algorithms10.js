// Sorted Union

function uniteUnique(arr) {
  var result = [];
  var k = arguments.length;
  for (var i = 0; i < k; i++) {
    var l = arguments[i].length;
    for (var j = 0; j < l; j++) {
      if (result.indexOf(arguments[i][j]) === -1) {
        result.push(arguments[i][j]);
      }
    }
  }
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

