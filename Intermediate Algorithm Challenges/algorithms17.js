// Drop It

function dropElements(arr, func) {
  // Drop them elements.
  var temp = [];
  while (arr.length) {
    temp.push(arr.shift());
    if (temp.filter(func).length > 0) {
      arr.unshift(temp.pop());
      break;
    }
  }
  return arr;
}

dropElements([0, 1, 0, 1], function(n) {return n === 1; });

